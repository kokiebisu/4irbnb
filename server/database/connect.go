package database

import (
	"database/sql"

	"fmt"

	_ "github.com/lib/pq"
)

// Database instance
var Db *sql.DB

// Database settings
const (
	host     = "localhost"
	port     = 5432 // Default port
	user     = "postgres"
	password = "password"
	dbname   = "airbnb"
)

// Connect function
func Connect() error {
	var err error
	Db, err = sql.Open("postgres", fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname))
	if err != nil {
		return err
	}
	if err = Db.Ping(); err != nil {
		return err
	}
	return nil
}