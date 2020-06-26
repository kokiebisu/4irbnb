package routes

import "github.com/gofiber/fiber"

func Stay(app *fiber.App) {
	stay := app.Group("/stay")
	stay.Get("/")
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
