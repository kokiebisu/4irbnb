package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/joho/godotenv"
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
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	httpRouter.GET("/", func (rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(rw, "Up and running")
	})
	httpRouter.GET("/api/users", userController.GetUsers)
	httpRouter.POST("/api/users/signup", userController.Signup)
	httpRouter.POST("/api/users/login", userController.Login)
	httpRouter.SERVE(":8080")
}
