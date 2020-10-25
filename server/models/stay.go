package models

type Stays struct {
	Stays []Stay `json:"stays"`
}

type Stay struct {
	ID string `json:"id"`
	Imgurl string `json:"imgurl"`
	Superhost bool `json:"superhost"`
	Ratings float32 `json:"ratings"`
	NumberOfReviews int `json:"number_of_reviews"`
	Type string `json:"type"`
	Location string `json:"location"`
	Title string `json:"title"`
}