package controller

import (
	"encoding/json"
	"net/http"

	"github.com/kokiebisu/airbnb/entity"
	"github.com/kokiebisu/airbnb/service"
)

var (
	userService service.UserService
)

type UserController interface {
	GetUsers(rw http.ResponseWriter, r *http.Request)
	Signup(rw http.ResponseWriter, r *http.Request)
	Login(rw http.ResponseWriter, r *http.Request)
}

type controller struct {}


func NewUserController(us service.UserService) UserController {
	userService = us
	return &controller{}
}

func (c *controller) GetUsers(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	rw.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	rw.Header().Set("Content-Type", "application/json")
	users, err := userService.FindAll()
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(&struct{
			Status string `json:"status"`
			Message string `json:"message"`
		}{
			Status: "error",
			Message: err.Error(),
		})
		return
	}
	rw.WriteHeader(http.StatusOK)
	json.NewEncoder(rw).Encode(&struct{
		Status string `json:"status"`
		Data []*entity.User `json:"data"`
	}{
		Status: "ok",
		Data: users,
	})
}

func (c *controller) Signup(rw http.ResponseWriter, r *http.Request) {
    rw.Header().Set("Access-Control-Allow-Origin", "*")
	rw.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	rw.Header().Set("Content-Type", "application/json")
	var user entity.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(&struct{
			Status string `json:"status"`
			Message string `json:"message"`
		}{
			Status: "error",
			Message: err.Error(),
		})
		return
	}
	err = userService.ValidateSignup(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(&struct{
			Status string `json:"status"`
			Message string `json:"message"`
		}{
			Status: "error",
			Message: err.Error(),
		})
		return
	}
	var result *entity.User
	result, err = userService.Create(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(&struct{
			Status string `json:"status"`
			Message string `json:"message"`
		}{
			Status: "error",
			Message: err.Error(),
		})
		return
	}
	rw.WriteHeader(http.StatusOK)
	json.NewEncoder(rw).Encode(result)
}


func (c *controller) Login(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	rw.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	rw.Header().Set("Content-Type", "application/json")
	var user entity.UserLogin
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(&struct{
			Status string `json:"status"`
			Message string `json:"message"`
		}{
			Status: "error",
			Message: err.Error(),
		})
		return
	}
	err = userService.Authenticate(&user)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(rw).Encode(&struct{
			Status string `json:"status"`
			Message string `json:"message"`
		}{
			Status: "error",
			Message: err.Error(),
		})
		return
	}
	rw.WriteHeader(http.StatusOK)
	json.NewEncoder(rw).Encode(&struct{
		Status string `json:"status"`
	}{
		Status: "ok",
	})
}