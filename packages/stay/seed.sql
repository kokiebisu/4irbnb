CREATE TYPE HOSTING_TYPE AS ENUM('Entire rental unit')

CREATE TABLE Stay (
	id serial PRIMARY KEY,
  	title VARCHAR(255) NOT NULL,
  	city VARCHAR(255) NOT NULL,
  	province VARCHAR(255) NOT NULL,
  	country VARCHAR(255) NOT NULL,
  	img_urls VARCHAR(255)[],
  	hosting_type HOSTING_TYPE,
  	guests INT NOT NULL,
  	bedrooms INT NOT NULL,
  	beds INT NOT NULL,
  	baths INT NOT NULL
);