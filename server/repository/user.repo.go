package repository

import (
	"database/sql"

	db "github.com/kokiebisu/airbnb/database"
	"github.com/kokiebisu/airbnb/entity"
)

type UserRepository interface {
	Save(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
	FindByEmail(s string) (*entity.User, error)
}

type repo struct {
	db *sql.DB
}

func NewUserRepository() UserRepository {
	return &repo{
		db: db.OpenConnection(),
	}
}

func (r *repo) Save(user *entity.User) (*entity.User, error) {
	query := `INSERT INTO "user" (email, firstname, lastname, password) VALUES ($1, $2, $3, $4)`
	_, err := r.db.Exec(query, (*user).Email, (*user).FirstName, (*user).LastName, (*user).Password)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (r *repo) FindAll() ([]*entity.User, error) {
	rows, err := r.db.Query(`SELECT * FROM "user"`)
	if err != nil {
		return nil, err
	}

	var users []*entity.User
	for rows.Next() {
		var user entity.User
		err := rows.Scan(&user.ID, &user.Email)
		if err != nil {
			return nil, err
		}
		users = append(users, &user)
	}

	return users, nil
}

func (r *repo) FindByEmail(email string) (*entity.User, error) {
	rows, err := r.db.Query(`SELECT * FROM "user" WHERE email = $1`, email)
	if err != nil {
		return nil, err
	}
	var user entity.User
	for rows.Next() {
		err := rows.Scan(&user.ID, &user.Email, &user.FirstName, &user.LastName, &user.Password)
		if err != nil {
			return nil, err
		}
	}
	return &user, nil
}