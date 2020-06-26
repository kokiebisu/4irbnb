package main

import (
	"log"

	"github.com/gofiber/fiber"
	"github.com/kokiebiu/gonebnb/server/database"
)

// Stay represents a stay
type Stay struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

// Stays represent an array of stays
type Stays struct {
	Stays []Stay `json:"stays"`
}

// GetAllStays retrieves all the stays
func GetAllStays(c *fiber.Ctx) {
	c.Send("Get All Stays")
}

// GetStay retrieves a stay by the given id
func GetStay(c *fiber.Ctx) {
	c.Send("Get Stay")
}

// AddStay adds a new stay
func AddStay(c *fiber.Ctx) {
	c.Send("Add Stay")
}

// RemoveStay removes a stay by the given id
func RemoveStay(c *fiber.Ctx) {
	c.Send("Remove Stay")
}

func main() {
	if err := database.Connect(); err != nil {
		log.Fatal(err)
	}

	app := fiber.New()

	api := app.Group("/api")
	v1 := api.Group("/v1")
	v1.Get("/stay", GetAllStays)
	v1.Get("/stay/:id", GetStay)
	v1.Post("/stay", AddStay)
	v1.Delete("/stay/:id", RemoveStay)

	app.Listen(4000)
}
