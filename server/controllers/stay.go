package controllers

import "github.com/gofiber/fiber"

func GetAllStays(c *fiber.Ctx) {
	c.Send("get stays")
}

func GetStay(c *fiber.Ctx) {
	c.Send("get stay")
}

func AddStay(c *fiber.Ctx) {
	c.Send("add stay")
}

func DeleteStay(c *fiber.Ctx) {
	c.Send("delete stay")
}
