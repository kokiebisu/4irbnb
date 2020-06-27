package controllers

import (
	"github.com/gofiber/fiber"
)

func (server *Server) initializeRoutes() {

	api := server.App.Group("/api")
	version := api.Group("/v1")

	server.registerStayRoutes(version)
	server.registerUserRoutes(version)
}

func (server *Server) registerStayRoutes(url *fiber.Group) {
	stay := url.Group("/stay")
	stay.Get("/", server.GetAllStays)
	stay.Get("/:id", server.GetStay)
	stay.Post("/", server.CreateStay)
	stay.Delete("/:id", server.RemoveStay)
}

func (server *Server) registerUserRoutes(url *fiber.Group) {
	user := url.Group("/user")
	user.Get("/", server.GetAllUsers)
	user.Get("/:id", server.GetUser)
	user.Post("/", server.CreateUser)
	user.Delete("/:id", server.RemoveUser)
}
