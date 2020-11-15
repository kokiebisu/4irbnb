package service

import (
	"errors"
	"math/rand"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/kokiebisu/airbnb/repository"
)

// repository.UserRepository is the type
var (
	repo repository.UserRepository = repository.NewUserRepository()
)

type UserService interface {
	Validate(user *entity.User) error
	Create(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
}

type userService struct {}

func NewUserService() UserService {
	return &userService{}
}

func (*userService) Validate(user *entity.User) error {
	if user == nil {
		err := errors.New("The user is empty")
		return err
	}
	if user.Email == "" {
		err := errors.New("The email is empty")
		return err
	}
	return nil
}
 
func (*userService) Create(user *entity.User) (*entity.User, error) {
	user.ID = rand.Intn(100)
	return repo.Save(user)
}

func (*userService) FindAll() ([]*entity.User, error) {
	return repo.FindAll()
}