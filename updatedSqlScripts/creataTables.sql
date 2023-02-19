CREATE DATABASE `bowlingapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


CREATE TABLE `bowlingapp`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `secQuest` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `idusers_UNIQUE` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`userName` ASC) VISIBLE);

CREATE TABLE `bowlingapp`.`balls` (
  `ballId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `manufacturer` VARCHAR(45),
  `year` YEAR,
  `ballName` VARCHAR(45) NOT NULL,
  `ballColor` VARCHAR(45),
  `ballWeight` DOUBLE NOT NULL,
  `coreName` VARCHAR(45),
  `coreType` VARCHAR(45) NOT NULL,
  `coreRG` FLOAT NOT NULL,
  `coreDifferential` FLOAT NOT NULL,
  `coreIDiff` DOUBLE,
  `coverName` VARCHAR(45),
  `coverFinish` VARCHAR(45),
  `horizDistToPin` DOUBLE NOT NULL,
  `vertDistToPin` DOUBLE NOT NULL,
  `horizDistToCG` DOUBLE NOT NULL,
  `vertDistToCG` DOUBLE NOT NULL,
  `horizDistToMB` DOUBLE,
  `vertDistToMB` DOUBLE,
  PRIMARY KEY (`ballId`));