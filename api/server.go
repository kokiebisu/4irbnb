package api

import (
	"log"

	"github.com/joho/godotenv"
)

// Initially check if .env is available
func init() {
	if err := godotenv.Load(); err != nil {
		log.Print(".env was not found")
	}
}

func Run() {
	var err error
	err = godotenv.Load()
	if err != nil {
		log.Fatalf("Error getting env %v", err)
	}

	server.Initialize()
}
