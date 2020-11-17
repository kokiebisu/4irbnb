package entity

type User struct {
	ID int `json:"id"`
	Email string `json:"email"`
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
	Password string `json:"password"`
}

type UserLogin struct {
	Email string `json:"email"`
	Password string `json:"password"`
}