CREATE TABLE stay (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    imgurl VARCHAR(100),
    superhost BOOLEAN DEFAULT FALSE,
    ratings FLOAT DEFAULT 0,
    number_of_reviews INT DEFAULT 0,
    "type" VARCHAR(15) NOT NULL,
    location VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL
);

INSERT INTO stay (imgurl, superhost, ratings, number_of_reviews, "type", location, title) VALUES ('https://a0.muscache.com/im/pictures/208586aa-a936-4ed6-ba84-f794d0c8a6fa.jpg?im_w=720', true, 4.89, 372, 'Farm Stay', 'Bowen Island', 'The Moulton Meadow Farm: Ocean Suite');

INSERT INTO stay (imgurl, superhost, ratings, number_of_reviews, "type", location, title) VALUES ('https://a0.muscache.com/im/pictures/208586aa-a936-4ed6-ba84-f794d0c8a6fa.jpg?im_w=720', true, 4.89, 372, 'Farm Stay', 'Bowen Island', 'The Moulton Meadow Farm: Ocean Suite');

INSERT INTO stay (imgurl, superhost, ratings, number_of_reviews, "type", location, title) VALUES ('https://a0.muscache.com/im/pictures/208586aa-a936-4ed6-ba84-f794d0c8a6fa.jpg?im_w=720', true, 4.89, 372, 'Farm Stay', 'Bowen Island', 'The Moulton Meadow Farm: Ocean Suite');

INSERT INTO stay (imgurl, superhost, ratings, number_of_reviews, "type", location, title) VALUES ('https://a0.muscache.com/im/pictures/208586aa-a936-4ed6-ba84-f794d0c8a6fa.jpg?im_w=720', true, 4.89, 372, 'Farm Stay', 'Bowen Island', 'The Moulton Meadow Farm: Ocean Suite');
