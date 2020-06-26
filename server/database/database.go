package database

import (
	"database/sql"
	"fmt"
	"os"
	"strconv"

	_ "github.com/lib/pq"
)

// var (
// 	host     = os.Getenv("DB_HOST")
// 	port     = strconv.Atoi(os.Getenv("DB_PORT"))
// 	user     = os.Getenv("DB_USER")
// 	password = os.Getenv("DB_PASSWORD")
// 	dbname   = os.Getenv("DB_NAME")
// )

var (
	db *sql.DB
)

func Connect() error {
	var err error

	host := os.Getenv("DB_HOST")
	port, err := strconv.Atoi(os.Getenv("DB_PORT"))
	if err != nil {
		panic(err.Error())
	}
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	db, err = sql.Open("postgres", fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname))
	if err != nil {
		return err
	}
	if err = db.Ping(); err != nil {
		return err
	}
	fmt.Println("Successfully connected with database...")
	return nil
}
