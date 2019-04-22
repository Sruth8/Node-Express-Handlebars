CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	types BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);