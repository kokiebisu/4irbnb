package controllers

import (
	"net/http"
	"strconv"

	"github.com/gofiber/fiber"
	"github.com/kokiebisu/gonebnb/api/models"
)

// GetAllUsers is an API that retrieves all the users
func (server *Server) GetAllUsers(c *fiber.Ctx) {
	user := models.User{}

	users, err := user.FindAllUsers(server.DB)
	if err != nil {
		c.Status(500).Send(err)
		return
	}
	if err := c.JSON(users); err != nil {
		c.Status(500).Send(err)
		return
	}
}

// GetUser is an API that retrieves a users from the specified id
func (server *Server) GetUser(c *fiber.Ctx) {
	user := models.User{}
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		c.Status(http.StatusBadRequest).Send(err)
		return
	}

	result, err := user.FindUserById(server.DB, id)
	if err != nil {
		c.Status(http.StatusBadRequest).Send(err)
		return
	}
	if err := c.JSON(result); err != nil {
		c.Status(http.StatusBadRequest).Send(err)
		return
	}
}

// CreateUser creates the User based on the request body
func (server *Server) CreateUser(c *fiber.Ctx) {
	user := models.User{}
	if err := c.BodyParser(&user); err != nil {
		c.Status(http.StatusUnprocessableEntity).Send(err)
		return
	}
	result, err := user.SaveUser(server.DB)
	if err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
	if err := c.JSON(result); err != nil {
		c.Status(http.StatusUnprocessableEntity).Send(err)
		return
	}
}

// RemoveUser is an API that removes a user from the specified id
func (server *Server) RemoveUser(c *fiber.Ctx) {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		c.Status(http.StatusBadRequest).Send(err)
		return
	}
	user := models.User{}
	_, err = user.DeleteUser(server.DB, id)
	if err != nil {
		c.Status(http.StatusBadRequest).Send(err)
		return
	}
	c.Status(http.StatusOK).Send("Successfully deleted user")
	return

}
