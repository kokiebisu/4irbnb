package controllers

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/kokiebisu/gonebnb/api/models"
)

type Server struct {
	DB  *gorm.DB
	App *fiber.App
}

// Initialize starts the server
func (server *Server) Initialize(host, port, dbname, user, password string) {
	var err error

	url := fmt.Sprint("host=db port=5432 user=ken password=kronos111 dbname=gonebnb sslmode=disable")

	server.DB, err = gorm.Open("postgres", url)
	if err != nil {
		log.Fatalf("this is the error: %v", err)
	} else {
		fmt.Println("Succesfully connected to the database")
	}

	server.DB.Debug().AutoMigrate(&models.User{}, &models.Stay{})
	server.App = fiber.New()

	server.initializeRoutes()
}

// Run starts listening on the specified port
func (server *Server) Run(address int) {
	fmt.Printf("Listening on port %d", address)
	server.App.Listen(address)
}
