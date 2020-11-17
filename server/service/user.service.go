package service

import (
	"errors"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/kokiebisu/airbnb/repository"
)

var (
	repo repository.UserRepository
)

type UserService interface {
	ValidateSignup(user *entity.User) error
	ValidateLogin(user *entity.User) error
	Authenticate(user *entity.UserLogin) error
	Create(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
}

type userService struct {}

// NewUserService creates a new userservice intance
func NewUserService(ur repository.UserRepository) UserService {
	repo = ur
	return &userService{}
}

func (*userService) ValidateSignup(user *entity.User) error {
	if user == nil {
		err := errors.New("The user is empty")
		return err
	}
	if (*user).Email == "" {
		err := errors.New("The email is empty")
		return err
	}
	if (*user).FirstName == "" {
		err := errors.New("The firstname is empty")
		return err
	}
	if (*user).LastName == "" {
		err := errors.New("The lastname is empty")
		return err
	}
	if (*user).Password == "" {
		err := errors.New("The password is empty")
		return err
	}
	return nil
}

func (*userService) ValidateLogin(user *entity.User) error {
	if (*user).Email == "" {
		err := errors.New("The email is empty")
		return err
	}
	if (*user).Password == "" {
		err := errors.New("The password is empty")
		return err
	}
	return nil
}

func (*userService) Authenticate(user *entity.UserLogin) error {
	result, err := repo.FindByEmail((*user).Email)
	if err != nil {
		return err
	}
	if result == nil {
		err = errors.New("No users were found from the specified email")
		return err
	}
	if (*result).Password != (*user).Password {
		err = errors.New("The password doesn't match")
		return err
	}
	return nil
}
 
func (*userService) Create(user *entity.User) (*entity.User, error) {
	return repo.Save(user)
}

func (*userService) FindAll() ([]*entity.User, error) {
	return repo.FindAll()
}
