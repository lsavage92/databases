/*Defines structure of DB tables, file will be ran in CL to create tables*/

CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(15)
);

CREATE TABLE Rooms (
  roomId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roomname VARCHAR(15)
);

CREATE TABLE Messages (
  /* Describe your table here.*/
  messageId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  messageText VARCHAR(140),
  userId INT,
  roomId INT,
  FOREIGN KEY (userId) REFERENCES Users(userId),
  FOREIGN KEY (roomId) REFERENCES Rooms(roomId)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

