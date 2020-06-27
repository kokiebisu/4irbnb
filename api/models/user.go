package models

import (
	"errors"
	"time"
	"html"
	"strings"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// User represents the structure of model User
type User struct {
	ID        uint64    `gorm:"primary_key;auto_increment" json:"id"`
	Email     string    `gorm:"size:255;not null;unique" json:"email"`
	Password  string    `gorm:"size:100;not null" json:"password"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"created_at"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"updated_at"`
}

func Hash(password string) ([]byte, error) {
	return bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
}

func VerifyPassword(hashedpassword string, password string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedpassword), []byte(password))
}

func (user *User) SavePassword() error {
	hashedPassword, err := Hash(user.Password)
	if err != nil {
		return err
	}
	user.Password = string(hashedPassword)
	return nil
} 

func (user *User) Prepare() {
	user.ID = 0
	user.Email = html.EscapeString(strings.TrimSpace(user.Email))
	user.CreatedAt = time.Now()
	user.UpdatedAt = time.Now()
}

func (user *User) SaveUser(db *gorm.DB) (*User, error) {
	err := db.Debug().Create(&user).Error
	if err != nil {
		// Has to return something for first argument so an empty User object
		return &User{}, err
	}
	return user, nil
}

func (user *User) FindAllUsers(db *gorm.DB) (*[]User, error) {
	users := []User{}
	// Check the User model
	// If you find it then insert into &users
	err := db.Debug().Model(&User{}).Find(&users).Error
	if err != nil {
		return &[]User{}, err
	}
	return &users, err
}

func (user *User) FindUserById(db *gorm.DB, uid int) (*User, error) {
	// Check the User model
	// If you find it then insert into &u
	err := db.Debug().Model(&User{}).Where("id = ?", uid).Take(&user).Error
	if err != nil {
		return &User{}, err
	}
	if gorm.IsRecordNotFoundError(err) {
		return &User{}, errors.New("User not found")
	}
	return user, err
}

func (user *User) UpdateUser(db *gorm.DB, uid int) (*User, error) {
	err := user.SavePassword()
	if err != nil {
		return &User{}, err
	}
	// You want to assign the the result to an empty User object
	db = db.Debug().Model(&User{}).Where("id = ?", uid).Take(&User{}).UpdateColumns(
		map[string]interface{}{
			"password": user.Password,
			"email": user.Email,
			"update_at": time.Now(),
		},
	)
	if db.Error != nil {
		return &User{}, db.Error
	}

	// Retrieve the updated User
	err = db.Debug().Model(&User{}).Where("id = ?", uid).Take(&user).Error
	if err != nil {
		return &User{}, nil
	}
	return user, nil
}

func (user *User) DeleteUser(db *gorm.DB, uid int) (int64, error) {
	// You are getting the address of it so you can just delete it directly
	db = db.Debug().Model(&User{}).Where("id = ?", uid).Take(&User{}).Delete(&User{})

	if db.Error != nil {
		return 0, db.Error
	}
	return db.RowsAffected, nil
}