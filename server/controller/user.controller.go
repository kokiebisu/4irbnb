package controller

import (
	"encoding/json"
	"net/http"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/kokiebisu/airbnb/errors"
	"github.com/kokiebisu/airbnb/service"
)

var (
	userService service.UserService
)

type UserController interface {
	GetUsers(rw http.ResponseWriter, r *http.Request)
	AddUsers(rw http.ResponseWriter, r *http.Request)
}

type controller struct {}

func NewUserController(us service.UserService) UserController {
	userService = us
	return &controller{}
}

func (c *controller) GetUsers(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	users, err := userService.FindAll()
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(errors.ServiceError{Message: "Error getting the users"})
		return
	}
	rw.WriteHeader(http.StatusOK)
	json.NewEncoder(rw).Encode(users)
}

func (c *controller) AddUsers(rw http.ResponseWriter, r *http.Request) {
    rw.Header().Set("Access-Control-Allow-Origin", "*")
    rw.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var user entity.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(errors.ServiceError{Message: err.Error()})
	}
	err = userService.Validate(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		rw.Write([]byte(`{"error": "Error validating user"}`))
		return
	}
	var result *entity.User
	result, err = userService.Create(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(errors.ServiceError{Message: "Error saving user"})
		return
	}
	rw.WriteHeader(http.StatusOK)
	json.NewEncoder(rw).Encode(result)
}