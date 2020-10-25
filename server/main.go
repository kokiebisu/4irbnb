package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/kokiebisu/airbnb/models"
	_ "github.com/lib/pq"
)

// Database instance
var db *sql.DB

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
	db, err = sql.Open("postgres", fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname))
	if err != nil {
		return err
	}
	if err = db.Ping(); err != nil {
		return err
	}
	return nil
}

func main() {
	// Connect with database
	if err := Connect(); err != nil {
		log.Fatal(err)
	}

	// Create a Fiber app
	app := fiber.New()

	// Get all records from postgreSQL
	app.Get("/stays", func(c *fiber.Ctx) error {
		// Insert Employee into database
		rows, err := db.Query("SELECT * from stays")
		if err != nil {
			return c.JSON(&fiber.Map{
				"success": false,
				"err": err,
			})
		}
		defer rows.Close()
		result := models.Stays{}

		for rows.Next() {
			stay := models.Stay{}
			if err := rows.Scan(&stay.ID, &stay.Imgurl, &stay.Superhost, &stay.Ratings); err != nil {
				return err // Exit if we get an error
			}

			// Append Employee to Employees
			result.Stays = append(result.Stays, stay)
		}
		// Return Employees in JSON format
		return c.JSON(result)
	})

	// Add record into postgreSQL
	app.Post("/stays", func(c *fiber.Ctx) error {
		// New Employee struct
		u := new(models.Stay)

		// Parse body into struct
		if err := c.BodyParser(u); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// Insert Employee into database
		res, err := db.Query("INSERT INTO stays (imgurl, superhost) VALUES ($1, $2)", u.Imgurl, u.Superhost)
		if err != nil {
			return err
		}

		// Print result
		log.Println(res)

		// Return Employee in JSON format
		return c.JSON(u)
	})

	// Update record into postgreSQL
	app.Put("/stays", func(c *fiber.Ctx) error {
		// New Employee struct
		u := new(models.Stay)

		// Parse body into struct
		if err := c.BodyParser(u); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// Insert Employee into database
		res, err := db.Query("UPDATE stays SET imgurl=$1 WHERE id=$5", u.Imgurl, u.ID)
		if err != nil {
			return err
		}

		// Print result
		log.Println(res)

		// Return Employee in JSON format
		return c.Status(201).JSON(u)
	})

	// Delete record from postgreSQL
	app.Delete("/stays", func(c *fiber.Ctx) error {
		// New Employee struct
		u := new(models.Stay)

		// Parse body into struct
		if err := c.BodyParser(u); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// Insert Employee into database
		res, err := db.Query("DELETE FROM stays WHERE id = $1", u.ID)
		if err != nil {
			return err
		}

		// Print result
		log.Println(res)

		// Return Employee in JSON format
		return c.JSON("Deleted")
	})

	log.Fatal(app.Listen(":3000"))
}