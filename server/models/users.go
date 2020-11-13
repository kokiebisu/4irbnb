package models

type User struct {
	ID int `json:"id"`
	Birthdate string `json:"birthdate"`
	Firstname string `json:"firstname"`
	Lastname string `json:"lastname"`
	Password string `json:"password"`
	Email string `json:"email"`
}

var users = []User{
	User{
		1,
		"2020-08-19",
		"Kenichi",
		"Okiebisu",
		"password",
		"ken@gmail.com",
	},
	User{
		1,
		"2020-08-19",
		"Kenichi",
		"Okiebisu",
		"password",
		"ken@gmail.com",
	},
}

func GetUsers() []User {
	return users
}