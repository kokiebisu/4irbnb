package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strconv"

	"github.com/kokiebisu/airbnb/models"
)

type Users struct {
	l *log.Logger
}

func NewUsers(l *log.Logger) *Users {
	return &Users{l}
}

func (u *Users) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	fmt.Println(req.URL.Path)
	if req.Method == http.MethodGet {
		u.GetUsers(rw, req)
		return 
	}

	if req.Method == http.MethodPost {	
		u.AddUsers(rw, req)
		return 
	}

	if req.Method == http.MethodPut {
		reg := regexp.MustCompile(`/([0-9]+)`)
		g := reg.FindAllStringSubmatch(req.URL.Path, -1)
		fmt.Println("entered", g)
		if len(g) != 1 {
			http.Error(rw, "Invalid URI more than one id", http.StatusBadRequest)
			return
		}
	
		if len(g[0]) != 2 {
			http.Error(rw, "Invalid URI more than one capture group", http.StatusBadRequest)
			return
		}

		idString := g[0][1]
		id, err := strconv.Atoi(idString)
		if err != nil {
			http.Error(rw, "Invalid URI unable to convert to number", http.StatusBadRequest)
			return
		}

		u.UpdateUser(id, rw, req)
		return 
	}

	rw.WriteHeader(http.StatusMethodNotAllowed)
}

func (u *Users) GetUsers(rw http.ResponseWriter, req *http.Request) {
	u.l.Println("Handle GET user")
	data := models.GetUsers()
	e := json.NewEncoder(rw)
	err := e.Encode(data)
	if err != nil {
		http.Error(rw, "Unable to marshal json", http.StatusInternalServerError)
	}
}

func (u *Users) AddUsers(rw http.ResponseWriter, req *http.Request) {
	u.l.Println("Handle POST user")
	user := &models.User{}
	d := json.NewDecoder(req.Body)
	err := d.Decode(&user)
	if err != nil {
		http.Error(rw, "Unable to unmarshal json", http.StatusBadRequest)
	}
	models.AddUsers(user)
	u.l.Println("User: %v", user)
}

func (u *Users) UpdateUser(id int, rw http.ResponseWriter, req *http.Request) {
	u.l.Println("Handle PUT User")

	user := &models.User{}

	d := json.NewDecoder(req.Body)
	err := d.Decode(&user)
	if err != nil {
		http.Error(rw, "Unable to marshal json", http.StatusBadRequest)
	}

	err = models.UpdateUser(id, user)
	if err == models.ErrorProductNotFound {
		http.Error(rw, "Product not found", http.StatusNotFound)
		return
	}

	if err != nil {
		http.Error(rw, "Something went wrong on update", http.StatusBadRequest)
		return
	}
}