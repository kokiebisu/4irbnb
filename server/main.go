package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/kokiebisu/airbnb/models"
	_ "github.com/lib/pq"
)

var db *sql.DB

const (
	host     = "db"
	port     = 5432 // Default port
	user     = "postgres"
	password = "password"
	dbname   = "airbnb"
)

func init() {
	var err error
	db, err = sql.Open("postgres", fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname))
	if err != nil {
		panic(err)
	}
	if err = db.Ping(); err != nil {
		panic(err)
	}
	fmt.Println("You are connected to the database")
}

func main() {
	http.HandleFunc("/", greetings)
	http.HandleFunc("/stays", GetStays)
	log.Fatal(http.ListenAndServe(":80", nil))
}

func greetings(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "hello world")
}

func GetStays(w http.ResponseWriter, req *http.Request) {
	var rows *sql.Rows
	var err error
	uniqueTypes := []string{"farm_stay", "earth_house", "barn", "tent"}
	typeParams := req.URL.Query()["type"]
	if len(typeParams) == 0 {
		rows, err = db.Query("SELECT * FROM stay")
	} else if typeParams[0] == "unique" {
		rows, err = db.Query("SELECT * FROM stay WHERE type = $1 OR type = $2 OR type = $3 OR type = $4", uniqueTypes[0], uniqueTypes[1], uniqueTypes[2], uniqueTypes[3])
	} else {
		rows, err = db.Query("SELECT * FROM stay WHERE type = $1", typeParams[0])
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	if err != nil {
		json.NewEncoder(w).Encode(struct {
			success bool
			err error
		}{false, err})
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
	json.NewEncoder(w).Encode(result)
}
