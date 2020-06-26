package main

import (
	"log"

	"server/database"

	"gihub.com/gofiber/logger"
	"github.com/gofiber/fiber"
	"github.com/gofiber/recover"
)

func main() {
	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}

	app := fiber.New()
	app.Use(recover.New())
	app.Use(logger.New())

	// Register stay routes
	routes.Stay(app)

	app.Listen(4000)
}
