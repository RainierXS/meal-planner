-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema meal_planner
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema meal_planner
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meal_planner` DEFAULT CHARACTER SET utf8 ;
USE `meal_planner` ;

-- -----------------------------------------------------
-- Table `meal_planner`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meal_planner`.`ingredient` (
  `id` VARCHAR(64) NOT NULL,
  `name` TINYTEXT NOT NULL,
  `measurment` TINYTEXT NOT NULL,
  `inventory` INT UNSIGNED NOT NULL,
  `always_buy` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meal_planner`.`recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meal_planner`.`recipe` (
  `id` VARCHAR(64) NOT NULL,
  `name` TINYTEXT NOT NULL,
  `description` MEDIUMTEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meal_planner`.`recipe_has_ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meal_planner`.`recipe_has_ingredient` (
  `recipe_id` VARCHAR(64) NOT NULL,
  `ingredient_id` VARCHAR(64) NOT NULL,
  `count` VARCHAR(45) NULL,
  PRIMARY KEY (`recipe_id`, `ingredient_id`),
  INDEX `fk_recipe_has_ingredient_ingredient1_idx` (`ingredient_id` ASC),
  INDEX `fk_recipe_has_ingredient_recipe_idx` (`recipe_id` ASC),
  CONSTRAINT `fk_recipe_has_ingredient_recipe`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `meal_planner`.`recipe` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_recipe_has_ingredient_ingredient1`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `meal_planner`.`ingredient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meal_planner`.`calendar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meal_planner`.`calendar` (
  `id` VARCHAR(64) NOT NULL,
  `date` DATE NOT NULL,
  `recipe_id` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_calendar_recipe1_idx` (`recipe_id` ASC),
  CONSTRAINT `fk_calendar_recipe1`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `meal_planner`.`recipe` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
