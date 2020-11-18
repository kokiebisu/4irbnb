package entity

import "time"

type User struct {
	ID int `json:"id"`
	Email string `json:"email"`
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
	Password string `json:"password"`
}

type LoginRequest struct {
	Email string `json:"email"`
	Password string `json:"password"`
	RecaptchaResponse string `json:"g-recaptcha-response"`
}

type SiteVerifyResponse struct {
	Success     bool      `json:"success"`
	ChallengeTS time.Time `json:"challenge_ts"`
	Hostname    string    `json:"hostname"`
	ErrorCodes  []string  `json:"error-codes"`
}