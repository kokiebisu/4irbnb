package services

import (
	"log"

	"github.com/gofiber/fiber"
	"github.com/kokiebisu/airbnb/models"
)

func GetStay() *fiber.Handler {
	return func(c *fiber.Ctx) error {
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
	}
}

func CreateStay() *fiber.Handler {
	return func(c *fiber.Ctx) error {
		// New Employee struct
		u := new(models.Stay)

		// Parse body into struct
		if err := c.BodyParser(u); err != nil {
			return c.Status(400).SendString(err.Error())
		}

		// Insert Employee into database
		res, err := Db.Query("INSERT INTO stays (imgurl, superhost) VALUES ($1, $2)", u.Imgurl, u.Superhost)
		if err != nil {
			return err
		}

		// Print result
		log.Println(res)

		// Return Employee in JSON format
		return c.JSON(u)
	}
}

func UpdateStay() *fiber.Handler {
	return func(c *fiber.Ctx) error {
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
	}
}

func DeleteStay() *fiber.Handler {
	return func(c *fiber.Ctx) error {
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
	}
}