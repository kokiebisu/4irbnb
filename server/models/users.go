package models

import "fmt"

type User struct {
	ID int `json:"id"`
	Birthdate string `json:"birthdate"`
	Firstname string `json:"firstname"`
	Lastname string `json:"lastname"`
	Password string `json:"password"`
	Email string `json:"email"`
}

type Users []*User

var users = Users{
	&User{
		1,
		"2020-08-19",
		"Kenichi",
		"Okiebisu",
		"password",
		"ken@gmail.com",
	},
	&User{
		1,
		"2020-08-19",
		"Kenichi",
		"Okiebisu",
		"password",
		"ken@gmail.com",
	},
}

func GetUsers() Users{
	return users
}

func AddUsers(u *User) {
	u.ID = GetNextId()
	users = append(users, u)
}

// func Errorf(format string, a ...interface{}) error
var ErrorProductNotFound = fmt.Errorf("Product not found")

func FindUser(id int) (int, *User, error) {
	for i, u := range users {
		if u.ID == id {
			return i, u, nil
		}
	}

	return -1, nil, ErrorProductNotFound
}

func UpdateUser(id int, u *User) error {
	i, fu, err := FindUser(id)
	if err != nil {
		return err
	}

	// just in case
	fu.ID = id
	users[i] = u
	return nil
}

func GetNextId() int {
	lu := users[len(users) - 1]
	return lu.ID + 1
}