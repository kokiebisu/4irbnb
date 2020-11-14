package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/kokiebisu/airbnb/models"
)

type Stays struct {
	l *log.Logger
}

func NewStays(l *log.Logger) *Stays {
	return &Stays{l}
}

func (s *Stays) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	if req.Method == http.MethodGet {
		s.GetStays(rw, req)
		return
	}
	if req.Method == http.MethodPost {
		s.AddStays(rw, req)
		return
	}
	http.Error(rw, "Method not being handled yet", http.StatusInternalServerError)
}

func (s *Stays) GetStays(rw http.ResponseWriter, req *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	s.l.Println("Handle GET Products")
	data := models.GetStays()
	e := json.NewEncoder(rw)
	err := e.Encode(data)
	if err != nil {
		http.Error(rw, "Unable to marshal json", http.StatusInternalServerError)
	}
}

func (s *Stays) AddStays(rw http.ResponseWriter, req *http.Request) {
	s.l.Println("Handle POST Stays")

	stay := models.Stay{}
	// the reason to use a reader is because it wants to
	// create a pipeline that keeps receiving data so that 
	// it can simultaneously convert it to struct
	d := json.NewDecoder(req.Body)
	err := d.Decode(&stay)
	if err != nil {
		http.Error(rw, "Unable to unmarshal json", http.StatusInternalServerError)
	}
	models.AddStays(stay)
	s.l.Println("Stays: %v", stay)
}