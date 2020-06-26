package api

// Stay represents a stay
type Stay struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

// Stays represent an array of stays
type Stays struct {
	Stays []Stay `json:"stays"`
}
