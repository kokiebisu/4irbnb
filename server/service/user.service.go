package service

import (
	"errors"
	"math/rand"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/kokiebisu/airbnb/repository"
)

var (
	repo repository.UserRepository
)

type UserService interface {
	Validate(user *entity.User) error
	Create(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
}

type userService struct {}

// NewUserService creates a new userservice intance
func NewUserService(ur repository.UserRepository) UserService {
	repo = ur
	return &userService{}
}

func (*userService) Validate(user *entity.User) error {
	if user == nil {
		err := errors.New("The user is empty")
		return err
	}
	if (*user).Email == "" {
		err := errors.New("The email is empty")
		return err
	}
	return nil
}
 
func (*userService) Create(user *entity.User) (*entity.User, error) {
	(*user).ID = rand.Intn(100)
	return repo.Save(user)
}

func (*userService) FindAll() ([]*entity.User, error) {
	return repo.FindAll()
}