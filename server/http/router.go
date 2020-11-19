package router

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Router interface {
	GET(uri string, f func(rw http.ResponseWriter, r *http.Request))
	POST(uri string, f func(rw http.ResponseWriter, r *http.Request))
	SERVE(port string)
}

type router struct {}

var (
	muxDispatcher = mux.NewRouter()
)

func NewMuxRouter() Router {
	return &router{}
}

func (r *router) GET(uri string, f func(rw http.ResponseWriter, r *http.Request)) {
	muxDispatcher.HandleFunc(uri, f).Methods("GET")
}

func (r *router) POST(uri string, f func(rw http.ResponseWriter, r *http.Request)) {
	muxDispatcher.HandleFunc(uri, f).Methods("POST")
}

func (r *router) SERVE(port string) {
	fmt.Printf("Server running on port %v", port)

	server := &http.Server{
		Addr: port,
		Handler: muxDispatcher,
		ReadTimeout: 10 * time.Second,
		WriteTimeout: 10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	log.Fatal(server.ListenAndServeTLS("server.crt", "server.key"))
}