package services

import (
	"database/sql"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/kokiebisu/airbnb/database"
	"github.com/kokiebisu/airbnb/models"
)

func GetStays(c *fiber.Ctx) error {
	var rows *sql.Rows
	var err error
	uniqueTypes := []string{"farm_stay", "earth_house", "barn", "tent"}
	// Insert Employee into database
	switch typeParams := c.Query("type"); typeParams {
	case "":
		fmt.Println("entered empty")
		rows, err = database.Db.Query("SELECT * FROM stay")
	case "unique":
		fmt.Println("entered unique")
		rows, err = database.Db.Query("SELECT * FROM stay WHERE type = $1 OR type = $2 OR type = $3 OR type = $4", uniqueTypes[0], uniqueTypes[1], uniqueTypes[2], uniqueTypes[3])
	default:
		rows, err = database.Db.Query("SELECT * FROM stay WHERE type = $1", typeParams)
	}

	if err != nil {
		return c.JSON(&fiber.Map{
			"success": false,
			"err": err,
		})
	}

	defer rows.Close()
	var result []models.Stay
	for rows.Next() {
		stayInfo := models.StayInfo{}
	
		if err := rows.Scan(&stayInfo.ID, &stayInfo.Imgurl, &stayInfo.Superhost, &stayInfo.Ratings, &stayInfo.NumberOfReviews, &stayInfo.Type, &stayInfo.Location, &stayInfo.Title); err != nil {
			panic(err) // Exit if we get an error
		}

		stay := models.Stay{
			Card: stayInfo,
			To: stayInfo.ID,
		}

		// Append Employee to Employees
		result = append(result, stay)
	}
	// Return Employees in JSON format
	return c.JSON(result)
}


// func CreateStay(c *fiber.Ctx) error {
// 	// New Employee struct
// 	u := new(models.Stay)

// 	// Parse body into struct
// 	if err := c.BodyParser(u); err != nil {
// 		return c.JSON(&fiber.Map{
// 			"success": false,
// 			"err": err,
// 		})
// 	}

// 	// Insert Employee into database
// 	res, err := database.Db.Query("INSERT INTO stays (imgurl, superhost) VALUES ($1, $2)", u.Imgurl, u.Superhost)
// 	if err != nil {
// 		return err
// 	}

// 	// Print result
// 	log.Println(res)

// 	// Return Employee in JSON format
// 	return c.JSON(u)
// }

// func UpdateStay(c *fiber.Ctx) error {
// 	// New Employee struct
// 	u := new(models.Stay)

// 	// Parse body into struct
// 	if err := c.BodyParser(u); err != nil {
// 		return c.JSON(&fiber.Map{
// 			"success": false,
// 			"err": err,
// 		})
// 	}

// 	// Insert Employee into database
// 	res, err := database.Db.Query("UPDATE stays SET imgurl=$1 WHERE id=$5", u.Imgurl, u.ID)
// 	if err != nil {
// 		return err
// 	}

// 	// Print result
// 	log.Println(res)

// 	// Return Employee in JSON format
// 	return c.Status(201).JSON(u)
// }

// func DeleteStay(c *fiber.Ctx) error {
// 	// New Employee struct
// 	u := new(models.Stay)

// 	// Parse body into struct
// 	if err := c.BodyParser(u); err != nil {
// 		return c.JSON(&fiber.Map{
// 			"success": false,
// 			"error": err,
// 		})
// 	}

// 	// Insert Employee into database
// 	res, err := database.Db.Query("DELETE FROM stays WHERE id = $1", u.ID)
// 	if err != nil {
// 		return err
// 	}

// 	// Print result
// 	log.Println(res)

// 	// Return Employee in JSON format
// 	return c.JSON("Deleted")
// }