drop database if exists friendFinder_db;

CREATE database friendFinder_db;

USE friendFinder_db;

CREATE TABLE friends(
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(55) NOT NULL,
photo NVARCHAR(255) NOT NULL,
score INT(2) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO friends(name,photo,score)

VALUES("Kelly","https://miro.medium.com/fit/c/240/240/1*4EAfNHiK_jDV5-IBQf2NsA.jpeg",50);

SELECT * FROM friends;
