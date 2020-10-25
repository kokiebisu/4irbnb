package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/kokiebisu/airbnb/services"
	_ "github.com/lib/pq"
)

// Database instance
var Db *sql.DB

// Database settings
const (
	host     = "localhost"
	port     = 5432 // Default port
	user     = "postgres"
	password = "password"
	dbname   = "airbnb"
)

// Connect function
func Connect() error {
	var err error
	db, err = sql.Open("postgres", fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname))
	if err != nil {
		return err
	}
	if err = db.Ping(); err != nil {
		return err
	}
	return nil
}

func main() {
	// Connect with database
	if err := Connect(); err != nil {
		log.Fatal(err)
	}

	// Create a Fiber app
	app := fiber.New()

	// Get all records from postgreSQL
	app.Get("/stays", services.GetStays)

	// Add record into postgreSQL
	app.Post("/stays", services.CreateStay)

	// Update record into postgreSQL
	app.Put("/stays", services.UpdateStay)

	// Delete record from postgreSQL
	app.Delete("/stays", services.DeleteStay)

	log.Fatal(app.Listen(":3000"))
}