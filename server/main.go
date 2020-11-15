package main

import (
	"fmt"
	"net/http"

	"github.com/kokiebisu/airbnb/controller"
	"github.com/kokiebisu/airbnb/router"
)

var (
	httpRouter router.Router = router.NewMuxRouter()
	userController controller.UserController = controller.NewUserController()
)


func main() {
	httpRouter.GET("/", func (rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(rw, "Up and running")
	})
	httpRouter.GET("/users", userController.GetUsers)
	httpRouter.POST("/users", userController.AddUsers)
	httpRouter.SERVE(":8080")
}
