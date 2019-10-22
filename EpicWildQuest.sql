-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema EpicWildQuest
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema EpicWildQuest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `EpicWildQuest` DEFAULT CHARACTER SET latin1 ;
-- -----------------------------------------------------
-- Schema EpicWildQuest
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema EpicWildQuest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `EpicWildQuest` DEFAULT CHARACTER SET latin1 ;
USE `EpicWildQuest` ;

-- -----------------------------------------------------
-- Table `EpicWildQuest`.`heroes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`heroes` (
  `name` VARCHAR(50) NOT NULL,
  `health` INT NOT NULL,
  `attack` INT NOT NULL,
  `gold` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`weapons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`weapons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `attack` INT NOT NULL,
  `categoryID` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`spells`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`spells` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `attack` INT NOT NULL,
  `categoryID` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`inventory` (
  `slotID` INT NOT NULL AUTO_INCREMENT,
  `weapons_id` INT NOT NULL,
  `spells_id` INT NOT NULL,
  `heroes_id` INT NOT NULL,
  PRIMARY KEY (`slotID`, `weapons_id`, `spells_id`, `heroes_id`),
  UNIQUE INDEX `slotID_UNIQUE` (`slotID` ASC),
  INDEX `fk_inventory_weapons1_idx` (`weapons_id` ASC),
  INDEX `fk_inventory_spells1_idx` (`spells_id` ASC),
  INDEX `fk_inventory_heroes1_idx` (`heroes_id` ASC),
  CONSTRAINT `fk_inventory_weapons1`
    FOREIGN KEY (`weapons_id`)
    REFERENCES `EpicWildQuest`.`weapons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inventory_spells1`
    FOREIGN KEY (`spells_id`)
    REFERENCES `EpicWildQuest`.`spells` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inventory_heroes1`
    FOREIGN KEY (`heroes_id`)
    REFERENCES `EpicWildQuest`.`heroes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`creatures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`creatures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `health` INT NOT NULL,
  `attack` INT NOT NULL,
  `gold` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`stories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`stories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `story` TEXT NOT NULL,
  `creatures_id` INT NULL,
  `locations_id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_stories_creatures1_idx` (`creatures_id` ASC),
  INDEX `fk_stories_locations1_idx` (`locations_id` ASC),
  CONSTRAINT `fk_stories_creatures1`
    FOREIGN KEY (`creatures_id`)
    REFERENCES `EpicWildQuest`.`creatures` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_stories_locations1`
    FOREIGN KEY (`locations_id`)
    REFERENCES `EpicWildQuest`.`locations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EpicWildQuest`.`choices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EpicWildQuest`.`choices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `choice` TEXT NOT NULL,
  `stories_id` INT NOT NULL,
  PRIMARY KEY (`id`, `stories_id`),
  INDEX `fk_choices_stories1_idx` (`stories_id` ASC),
  CONSTRAINT `fk_choices_stories1`
    FOREIGN KEY (`stories_id`)
    REFERENCES `EpicWildQuest`.`stories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `EpicWildQuest` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
