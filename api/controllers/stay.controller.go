package controllers

import (
	"net/http"
	"strconv"

	"github.com/gofiber/fiber"
	"github.com/kokiebisu/gonebnb/api/models"
)

func (server *Server) GetAllStays(c *fiber.Ctx) {
	stay := models.Stay{}
	result, err := stay.FindAllStays(server.DB)
	if err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
	if err := c.JSON(result); err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
}

// GetStay is an API that retrives a user from the specified id
func (server *Server) GetStay(c *fiber.Ctx) {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
	stay := models.Stay{}
	result, err := stay.FindStayById(server.DB, id)
	if err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
	if err := c.JSON(result); err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
}

func (server *Server) CreateStay(c *fiber.Ctx) {
	stay := models.Stay{}
	if err := c.BodyParser(&stay); err != nil {
		c.Status(http.StatusUnprocessableEntity).Send(err)
		return
	}
	result, err := stay.SaveStay(server.DB)
	if err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
	if err := c.BodyParser(result); err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
}

func (server *Server) RemoveStay(c *fiber.Ctx) {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		c.Status(http.StatusInternalServerError).Send(err)
		return
	}
	stay := models.Stay{}
	_, err = stay.DeleteStayById(server.DB, id)
	if err != nil {
		c.Status(500).Send(err)
	}
	c.Status(http.StatusOK).Send("Successfully removed stay")
	return
}
