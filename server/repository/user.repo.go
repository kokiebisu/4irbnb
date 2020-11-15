package repository

import (
	"github.com/kokiebisu/airbnb/entity"
)

type UserRepository interface {
	Save(user *entity.User) (*entity.User, error)
	FindAll() ([]*entity.User, error)
}

type repo struct {}

func NewUserRepository() UserRepository {
	return &repo{}
}

func (r *repo) Save(user *entity.User) (*entity.User, error) {
	return nil, nil
}

func (r *repo) FindAll() ([]*entity.User, error) {
	return nil, nil
}