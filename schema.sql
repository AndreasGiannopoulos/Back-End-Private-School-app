-- create the database --
CREATE DATABASE IF NOT EXISTS `private_school`;

-- use the database --
USE `private_school`;

-- create table subjects --
CREATE TABLE IF NOT EXISTS `subjects`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(25) NOT NULL DEFAULT ''
) AUTO_INCREMENT = 0;

-- create table trainers --
CREATE TABLE IF NOT EXISTS `trainers`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`first_name` VARCHAR(25) NOT NULL DEFAULT '',
`last_name` VARCHAR(25) NOT NULL DEFAULT '',
`subjects_id` INT NOT NULL,
CONSTRAINT `trainers_subjects_id__subjects_id` FOREIGN KEY(`subjects_id`) REFERENCES `subjects`(`id`) 
) AUTO_INCREMENT = 0;

-- create table courses --
CREATE TABLE IF NOT EXISTS `courses`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(25) NOT NULL DEFAULT '',
`stream` VARCHAR(25) NOT NULL DEFAULT '',
`type` BOOLEAN, -- 0 = fulltime, 1 = part time --
`start_date` DATE NOT NULL DEFAULT '1900-01-01',
`end_date` DATE NOT NULL DEFAULT '1900-01-01') AUTO_INCREMENT = 0;

-- create table students --
CREATE TABLE IF NOT EXISTS `students`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`first_name` VARCHAR(25) NOT NULL DEFAULT '',
`last_name` VARCHAR(25) NOT NULL DEFAULT '',
`date_of_birth` DATE NOT NULL DEFAULT '1900-01-01',
`tuition_fees` FLOAT(6.2) NOT NULL DEFAULT 2500,
`oral_mark` INT NOT NULL DEFAULT 0
) AUTO_INCREMENT = 0;

-- create table projects_assignments --
CREATE TABLE IF NOT EXISTS `projects_assignments`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(25) NOT NULL DEFAULT '',
`description` VARCHAR(250) NULL DEFAULT '',
`sub_date` DATE NOT NULL DEFAULT '1900-01-01',
`is_project` BOOLEAN NULL DEFAULT NULL	-- 0 = assignment, 1 = project --
) AUTO_INCREMENT = 0;

-- create table courses_trainers --
CREATE TABLE IF NOT EXISTS `courses_trainers`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`courses_id` INT NULL DEFAULT 0,
`trainers_id` INT NULL DEFAULT 0,
CONSTRAINT `courses_trainers_courses_id__courses_id` FOREIGN KEY(`courses_id`) REFERENCES `courses`(`id`),
CONSTRAINT `courses_trainers_trainers_id__trainers_id` FOREIGN KEY(`trainers_id`) REFERENCES `trainers`(`id`)
) AUTO_INCREMENT = 0;

-- create table courses_students --
CREATE TABLE IF NOT EXISTS `courses_students`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`courses_id` INT NULL DEFAULT 0,
`students_id` INT NULL DEFAULT 0,
CONSTRAINT `courses_students_courses_id__courses_id` FOREIGN KEY(`courses_id`) REFERENCES `courses`(`id`),
CONSTRAINT `courses_students_students_id__students_id` FOREIGN KEY(`students_id`) REFERENCES `students`(`id`)
) AUTO_INCREMENT = 0;

-- create table projects_assignments_courses --
CREATE TABLE IF NOT EXISTS `projects_assignments_courses`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`courses_id` INT NULL DEFAULT 0,
`projects_assignments_id` INT NULL DEFAULT 0,
CONSTRAINT `projects_assignments_courses_courses_id__courses_id` FOREIGN KEY(`courses_id`) REFERENCES `courses`(`id`),
CONSTRAINT `projects_assignments__projects_assignments_id` FOREIGN KEY(`projects_assignments_id`) REFERENCES `projects_assignments`(`id`)
) AUTO_INCREMENT = 0;

-- create table groups --
CREATE TABLE IF NOT EXISTS `groups`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`group_name` VARCHAR(25) NOT NULL DEFAULT ''
) AUTO_INCREMENT = 0;

-- create table groups_students --
CREATE TABLE IF NOT EXISTS `groups_students`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`groups_id` INT NULL DEFAULT 0,
`students_id` INT NULL DEFAULT 0,
CONSTRAINT `groups_students_groups_id__courses_id` FOREIGN KEY(`groups_id`) REFERENCES `groups`(`id`),
CONSTRAINT `groups_students_groups_id__students_id` FOREIGN KEY(`students_id`) REFERENCES `students`(`id`)
) AUTO_INCREMENT = 0;

-- create table groups_projects_assignments --
CREATE TABLE IF NOT EXISTS `groups_projects_assignments`
(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`groups_id` INT NULL DEFAULT 0,
`is_submitted` BOOLEAN NULL DEFAULT NULL,	-- 0 = not submitted, 1 = submitted --
`projects_assignments_mark` FLOAT(4.1) NULL DEFAULT NULL,
`projects_assignments_id` INT NULL DEFAULT 0,
CONSTRAINT `groups_projects_assignments_groups_id__groups_id` FOREIGN KEY(`groups_id`) REFERENCES `groups`(`id`),
CONSTRAINT `groups_projects_assignments_groups_id__students_id` FOREIGN KEY(`projects_assignments_id`) REFERENCES `projects_assignments`(`id`)
) AUTO_INCREMENT = 0;