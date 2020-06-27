package controllers

import (
	"log"

	"github.com/gofiber/fiber"
	"github.com/kokiebisu/gonebnb/api/models"
)

func GetAllStays(c *fiber.Ctx) {
	c.Send("get all stays")
}

func GetStay(c *fiber.Ctx) {
	c.Send("get stay")
}

func CreateStay(c *fiber.Ctx) {
	c.Send("create stay")
	stay := models.Stay{}
	if err := c.BodyParser(stay); err != nil {
		log.Fatal(err)
	}
	log.Println(stay.ID)
	log.Println(stay.Title)
}

func RemoveStay(c *fiber.Ctx) {
	c.Send("delete stay")
}
