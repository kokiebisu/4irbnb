package repository

import (
	"database/sql"

	db "github.com/kokiebisu/airbnb/database"
	"github.com/kokiebisu/airbnb/entity"
)

type UserRepository interface {
	Save(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
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
	query := `INSERT INTO "user" (id, email) VALUES ($1, $2) returning *`
	_, err := r.db.Exec(query, (*user).ID, (*user).Email)
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