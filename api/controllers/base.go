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
func (server *Server) Initialize(driver, user, password, port, host, name string) {
	var err error

	url := fmt.Sprintf("host=%s port=%s user=%s dbname=%s sslmode=disable password=%s", host, port, user, name, password)

	server.DB, err = gorm.Open(driver, url)
	if err != nil {
		fmt.Printf("Cannot connect to %s database", driver)
		log.Fatalf("this is the error: %v", err)
	} else {
		fmt.Print("Succesfully connected to the database")
	}

	server.DB.Debug().AutoMigrate(&models.User{}, &models.Stay{})
	server.App = fiber.New()

}

// Run starts listening on the specified port
func (server *Server) Run(address int) {
	fmt.Printf("Listening on port %d", address)
	server.App.Listen(address)
}
