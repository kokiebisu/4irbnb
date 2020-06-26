package controllers

import (
	"github.com/gofiber/fiber"
)

func GetAllStays(c *fiber.Ctx) {
	c.Send("get all stays")
}

func GetStay(c *fiber.Ctx) {
	c.Send("get stay")
}

func CreateStay(c *fiber.Ctx) {
	c.Send("create stay")
}

func RemoveStay(c *fiber.Ctx) {
	c.Send("delete stay")
}
