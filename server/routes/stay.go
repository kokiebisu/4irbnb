package routes

import (
	"github.com/kokiebisu/gonebnb/server/controllers"

	"github.com/gofiber/fiber"
)

func Stay(app *fiber.Group) {
	stay := app.Group("/stay")
	stay.Get("/", controllers.GetAllStays)
	stay.Get("/:id", controllers.GetStay)
	stay.Post("/", controllers.AddStay)
	stay.Delete("/:id", controllers.DeleteStay)
}
