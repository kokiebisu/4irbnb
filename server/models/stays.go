package models

type Stay struct {
	ID int `json:"id"`
	Imgurl string `json:"imgUrl"`
	Superhost bool `json:"superhost"`
	Ratings float32 `json:"ratings"`
	NumberOfReviews int `json:"number_of_reviews"`
	Type string `json:"type"`
	Location string `json:"location"`
	Title string `json:"title"`
	To string `json:"to"`
}

var stays = []Stay{
	{
		1,
		"www.google.com",
		true,
		4.5,
		432,
		"tiny house",
		"Paris",
		"The home sweet home",
		"/stays",
	},
}

func GetStays() []Stay {
	return stays
}

func AddStays(s Stay) {
	s.ID = getNextID()
	stays = append(stays, s)
}

func getNextID() int {
	ls := stays[len(stays) - 1]
	return ls.ID + 1
}	