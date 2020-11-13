package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/kokiebisu/airbnb/models"
)

type Users struct {
	l *log.Logger
}

func NewUsers(l *log.Logger) *Users {
	return &Users{l}
}

func (u *Users) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	if req.Method == http.MethodGet {
		u.GetUsers(w, req)
		return
	}

	if req.Method == http.MethodPost {
		u.AddUsers(w, req)
		return 
	}
	w.WriteHeader(http.StatusMethodNotAllowed)
}

func (u *Users) GetUsers(rw http.ResponseWriter, req *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	u.l.Println("Handle GET user")
	data := models.GetUsers()
	fmt.Println("data from users", data)
	e := json.NewEncoder(rw)
	err := e.Encode(data)
	if err != nil {
		http.Error(rw, "Unable to marshal json", http.StatusInternalServerError)
	}
}

func (u *Users) AddUsers(rw http.ResponseWriter, req *http.Request) {
	u.l.Println("Handle POST user")
	user := models.User{}
	d := json.NewDecoder(req.Body)
	err := d.Decode(&user)
	if err != nil {
		http.Error(rw, "Unable to unmarshal json", http.StatusBadRequest)
	}
	models.AddUsers(user)
	u.l.Println("User: %v", user)
}