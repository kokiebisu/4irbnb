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

INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/208586aa-a936-4ed6-ba84-f794d0c8a6fa.jpg?im_w=720', true, 4.89, 372, 'farm_stay', 'Bowen Island', 'The Moulton Meadow Farm: Ocean Suite');
INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/924798e4-2fe1-47de-9636-947332829bcc.jpg?im_w=720', true, 4.93, 244, 'farm_stay', 'Bowen Island', 'The Moulton Meadow Farm: Seaview Cabin');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/dc09ee21-27e9-4dcd-9b59-7ba7ade0563f.jpg?im_w=1200', true, 4.98, 525, 'earth_house', 'Mayne Island', 'Cob Cottage');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?im_w=720', true, 5.0, 20, 'yurt', 'Courtenay', 'The Rainforest Yurt');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/d326e402-0a38-4dfd-b42c-0ace66c0921f.jpg?im_w=720', true, 4.95, 452,'island','Squamish','Waterfront Cabin. Social distance with a view:)');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/f8cd6e05-fd89-4cb0-8b5b-8494cbdd9f25.jpg?im_w=720', true, 4.88, 148, 'tiny_house', 'Roberts Creek', 'Somewhere in the Woods');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/af97b312-1d07-4092-ac6d-a03fff6c5176.jpg?im_w=720', true, 4.99, 268, 'tiny_house', 'La Conner', 'The Coho Cabin - A Beachfront Getaway');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/106479477/b77246a0_original.jpg?im_w=720', true, 4.92, 575, 'tiny_house', 'Roberts Creek', '*The Micro Cabin in Roberts Creek*');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/8dc02adc-6463-4846-a902-e90e02fe5489.jpg?im_w=720', true, 4.91, 125, 'tiny_house', 'Roberts Creek', 'Roberts Creek Park Tiny House');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/2919cd80-fe1c-4a63-84e8-c7c6d5e3a93b.jpg?im_w=720', true, 4.97, 52, 'tiny_house', 'Roberts Creek', 'Cedar Grove Cottage');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/2919cd80-fe1c-4a63-84e8-c7c6d5e3a93b.jpg?im_w=720', false, 5.0, 34, 'camper_rv', 'Gibsons', 'Modern Vintage Airstream on the Sunshine Coast');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/48032926-4b54-4a41-af2c-e42cfdf71c44.jpg?im_w=720', false, 5.0, 129, 'camper_rv', 'Bowen Island',  'Airstream Island Retreat: Unique, Bright & Central');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/7e0063fa-d325-49ae-a6f6-285fe9928da4.jpg?im_w=720', true, 4.93, 14, 'camper_rv', 'Kelowna', 'School bus - now a romantic RV');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/c971ab21-5b7e-4838-af9d-3a75ac33f3ca.jpg?im_w=720', true, 4.64, 22, 'camper_rv', 'Squamish', 'Spacious camper - tiny home in Brackendale');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/c971ab21-5b7e-4838-af9d-3a75ac33f3ca.jpg?im_w=720', true, 5.0, 5, 'camper_rv', 'Mount Currie', 'Modern & Stylish ★ Private, Fire-Pit, Waterfall');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/2e5550b5-628f-46a6-ae3b-93495384c15e.jpg?im_w=720', true, 4.94, 104, 'hut', 'Sutton', 'Unique glamping experience near Ely & Cambridge');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/c1c8dd39-bd73-4535-9259-9d9efe05af80.jpg?im_w=720', true, 4.96, 101, 'dome_house', 'Sonseca', 'El Avistador. Montes de Toledo');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/5fddd4c5-4567-4093-aee7-a1c7f38ca2b1.jpg?im_w=720', true, 4.91, 248, 'cave', 'Granada', 'THE LOVERS CAVE');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/44ae3668-4511-42df-83a5-ba3b8915a7bc.jpg?im_w=720', true, 5.0, 22, 'dome_house', 'Sesquile', 'Bird Glamping');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/4cd1daf3-a3a0-49b8-8664-fa7b647c346d.jpg?im_w=720', true, 4.89, 252, 'tent', 'College Place', 'Hideaway Tent with Pool and Hot Tub');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/d5d015a1-1427-4c3c-99c1-20d79b136691.jpg?im_w=720', true, 4.92, 49, 'entire_cabin', 'Huasca de Ocampo', 'Cada del Arbol Pinochueco (Patagonia)');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/f1157218-4040-4950-90ed-da357ce9e4db.jpg?im_w=720', true, 4.92, 49, 'barn', 'Hipswell', 'Quaint 1860 stone barn with private hot tub');
-- INSERT INTO stay (imgUrl, superhost, ratings, number_of_reviews, type, location, title) VALUES ('https://a0.muscache.com/im/pictures/3ee610a2-2e65-4a75-988e-65e2783f85a0.jpg?im_w=720', true, 4.86, 58, 'tent', 'Bitem', 'Family Bell Tent at Cactus Lodge');

CREATE TABLE "user" (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    birth_date VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);