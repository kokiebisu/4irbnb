package main

import (
	"log"

	"github.com/gofiber/fiber"
	"github.com/kokiebisu/gonebnb/server/database"
)

func setupRoutes(app *fiber.App) {

}

func main() {
	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}

	app := fiber.New()

	setupRoutes(app)
}
