package api

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/kokiebisu/gonebnb/api/controllers"
)

// Instantiate server instance
var server = controllers.Server{}

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

	server.Initialize(os.Getenv("DB_DRIVER"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_PORT"), os.Getenv("DB_HOST"), os.Getenv("DB_NAME"))

	server.Run()
}
