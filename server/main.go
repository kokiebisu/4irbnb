package main

import (
	"fmt"
	"net/http"

	"github.com/kokiebisu/airbnb/controller"
	router "github.com/kokiebisu/airbnb/http"
	"github.com/kokiebisu/airbnb/repository"
	"github.com/kokiebisu/airbnb/service"
)

var (
	userRepository repository.UserRepository = repository.NewUserRepository()
	userService service.UserService = service.NewUserService(userRepository)
	userController controller.UserController = controller.NewUserController(userService)
	httpRouter router.Router = router.NewMuxRouter()
)


func main() {
	httpRouter.GET("/", func (rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(rw, "Up and running")
	})
	httpRouter.GET("/users", userController.GetUsers)
	httpRouter.POST("/users", userController.AddUsers)
	httpRouter.SERVE(":8080")
}
