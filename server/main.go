package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/kokiebisu/airbnb/handlers"
)

func main() {

	// where to log
	// prefix appears the beginning of each log
	// lstdFlags -> date & time
	l := log.New(os.Stdout, "api", log.LstdFlags)

	sh := handlers.NewStays(l)
	uh := handlers.NewUsers(l)

	sm := http.NewServeMux()
	sm.Handle("/stays", sh)
	sm.Handle("/users", uh)

	server := &http.Server{
		Addr: ":8080",
		Handler: sm,
		ReadTimeout: 10 * time.Second,
		WriteTimeout: 10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	server.ListenAndServe()
}
