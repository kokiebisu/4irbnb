package main

import (
	"log"

	"github.com/joho/godotenv"

	"github.com/kokiebisu/gonebnb/server/database"
	"github.com/kokiebisu/gonebnb/server/routes"

	"github.com/gofiber/fiber"
	"github.com/gofiber/logger"
	"github.com/gofiber/recover"
)

func main() {
	// Loading env files
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}

	app := fiber.New()
	app.Use(recover.New())
	app.Use(logger.New())

	// Register stay routes
	api := app.Group("/api")
	v1 := api.Group("/v1")
	routes.RegisterApi(v1)

	app.Listen(4000)
}
