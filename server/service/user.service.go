package service

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/kokiebisu/airbnb/repository"
)

var (
	repo repository.UserRepository
)

const siteVerifyURL = "https://www.google.com/recaptcha/api/siteverify"

type UserService interface {
	ValidateSignup(user *entity.User) error
	ValidateLogin(user *entity.User) error
	Authenticate(user *entity.LoginRequest) error
	Create(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
	CheckRecaptcha(secret, response string) error
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

func (*userService) Authenticate(user *entity.LoginRequest) error {
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

func (*userService) CheckRecaptcha(secret, response string) error {
	req, err := http.NewRequest(http.MethodPost, siteVerifyURL, nil)
	if err != nil {
		return err
	}

	// Add necessary request parameters.
	q := req.URL.Query()
	q.Add("secret", secret)
	q.Add("response", response)
	req.URL.RawQuery = q.Encode()
	// Make request
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Decode response.
	var body entity.SiteVerifyResponse

	if err = json.NewDecoder(resp.Body).Decode(&body); err != nil {
		return err
	}

	fmt.Println("google response ", body)
	// Check recaptcha verification success.
	if !body.Success {
		return errors.New("unsuccessful recaptcha verify request")
	}

	return nil
}