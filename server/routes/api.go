package routes

import (
	"github.com/gofiber/fiber"
)

func RegisterApi(api *fiber.Group) {
	Stay(api)
}
