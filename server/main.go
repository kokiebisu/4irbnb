package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/kokiebisu/airbnb/database"
	"github.com/kokiebisu/airbnb/services"
	_ "github.com/lib/pq"
)

func main() {
	// Connect with database
	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}

	// Create a Fiber app
	app := fiber.New()


	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000, https://airbnb-lemon.vercel.app",
		AllowHeaders:  "Origin, Content-Type, Accept",
	}))

	app.Get("/stays", services.GetStays)
	app.Get("/", func (c *fiber.Ctx) error {
		c.SendString("hello")
		return nil
	})
	// app.Post("/stays", services.CreateStay)
	// app.Put("/stays", services.UpdateStay)
	// app.Delete("/stays", services.DeleteStay)

	log.Fatal(app.Listen(":80"))
}