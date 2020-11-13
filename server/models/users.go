package models

type User struct {
	ID int
	Email string
	Password string
	FirstName string
	LastName string
	BirthDate string
}

func GetUsers() []User {
	return users
}

var users = []User{
	{
		ID: 1,
		Email: "ken@gmail.com",
		Password: "kenny",
		FirstName: "Ken",
		LastName: "Park",
		BirthDate: "2020-11-05",
	},
	{
		ID: 2,
		Email: "ben@gmail.com",
		Password: "benny",
		FirstName: "Ben",
		LastName: "Park",
		BirthDate: "2020-11-05",
	},
}

