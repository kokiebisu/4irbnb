package models

type Stay struct {
	Card StayInfo `json:"card"`
	To string `json:"to"`
}

type StayInfo struct {
	ID int `json:"id"`
	Imgurl string `json:"imgUrl"`
	Superhost bool `json:"superhost"`
	Ratings float32 `json:"ratings"`
	NumberOfReviews int `json:"number_of_reviews"`
	Type string `json:"type"`
	Location string `json:"location"`
	Title string `json:"title"`
}

var stays = []Stay{
	{
		StayInfo{
			1,
			"www.google.com",
			true,
			4.5,
			432,
			"tiny house",
			"Paris",
			"The home sweet home",
		},
		"/stays",
	},
}

func GetStays() []Stay {
	return stays
}