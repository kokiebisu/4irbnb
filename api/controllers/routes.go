package controllers

import (
	"github.com/gofiber/fiber"
)

func (server *Server) initializeRoutes() {

	api := server.App.Group("/api")
	version := api.Group("/v1")

	registerStayRoutes(version)
	registerUserRoutes(version)
}

func registerStayRoutes(url *fiber.Group) {
	stay := url.Group("/stay")
	stay.Get("/", GetAllStays)
	stay.Get("/:id", GetStay)
	stay.Post("/", CreateStay)
	stay.Delete("/:id", RemoveStay)
}

func registerUserRoutes(url *fiber.Group) {
	user := url.Group("/user")
	user.Get("/", GetAllUsers)
	user.Get("/:id", GetUser)
	user.Post("/", CreateUser)
	user.Delete("/:id", RemoveUser)
}
