package controllers

import (
	"log"

	"github.com/gofiber/fiber"
	"github.com/kokiebisu/gonebnb/api/models"
)

func GetAllUsers(c *fiber.Ctx) {
	c.Send("get all users")
}

func GetUser(c *fiber.Ctx) {
	c.Send("get user")
}

func CreateUser(c *fiber.Ctx) {
	c.Send("create user")
	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		log.Fatal(err)
	}
	log.Println(user.Email)
}

func RemoveUser(c *fiber.Ctx) {
	c.Send("delete user")
}
