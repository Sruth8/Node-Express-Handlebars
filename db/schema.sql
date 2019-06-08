CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
 INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken Burger", FALSE);
  INSERT INTO burgers (burger_name, devoured) VALUES ("Turkey Burger", FALSE);
   INSERT INTO burgers (burger_name, devoured) VALUES ("Soy Burger", FALSE);

   select * from burgers