package service

import (
	"testing"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type MockRepository struct {
	mock.Mock
}

func (mock *MockRepository) Save(user *entity.User) (*entity.User, error) {
	args := mock.Called()
	return args.Get(0).(*entity.User), args.Error(1)
}

func (mock *MockRepository) FindAll() ([]*entity.User, error) {
	args := mock.Called()
	return args.Get(0).([]*entity.User), args.Error(1)
}


func TestValidateEmptyUser(t *testing.T) {
	testService := NewUserService(nil)

	err := testService.Validate(nil)
	assert.NotNil(t, err)
	assert.Equal(t, "The user is empty", err.Error())
}

func TestValidateEmptyUserEmail(t *testing.T) {
	user := &entity.User{
		ID: 1,
		Email: "",
	}
	testService := NewUserService(nil)
	err := testService.Validate(user)
	assert.NotNil(t, err)
	// check whether if second and third argument is the same
	assert.Equal(t, "The email is empty", err.Error())
}

func TestFindAll(t *testing.T) {
	mockRepo := new(MockRepository)
	user := &entity.User{ID: 1, Email: "example@gmail.com"}

	// setup expectations
	mockRepo.On("FindAll").Return([]*entity.User{user}, nil)


	testService := NewUserService(mockRepo)
	// call the code we are testing
	result, _ := testService.FindAll()

	// assert that the expectations were met
	mockRepo.AssertExpectations(t)

	assert.Equal(t, "example@gmail.com", result[0].Email)
}

func TestCreate(t *testing.T) {
	mockRepo := new(MockRepository)
	user := &entity.User{ID: 1, Email: "example.gmail.com"}

	mockRepo.On("Save").Return(user, nil)

	testService := NewUserService(mockRepo)

	result, _ := testService.Create(user)

	mockRepo.AssertExpectations(t)

	// Data assertion
	assert.NotNil(t, result.ID)
	assert.Equal(t, "example.gmail.com", result.Email)
}