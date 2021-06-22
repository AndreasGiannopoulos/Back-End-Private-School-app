-- insert data to subjects table --
INSERT INTO `subjects` (`title`)
VALUES ('HTML/CSS');
INSERT INTO `subjects` (`title`)
VALUES ('OOP');
INSERT INTO `subjects` (`title`)
VALUES ('SQL');
INSERT INTO `subjects` (`title`)
VALUES ('NODE');
INSERT INTO `subjects` (`title`)
VALUES ('FP');	-- FunctionalProgramming --

-- insert data to trainers table --
INSERT INTO `trainers` (`first_name`, `last_name`, `subjects_id`)
VALUES ('Giannis', 'Mantoudis', '5');
INSERT INTO `trainers` (`first_name`, `last_name`, `subjects_id`)
VALUES ('Lena', 'Kapetanaki', '1');
INSERT INTO `trainers` (`first_name`, `last_name`, `subjects_id`)
VALUES ('Giorgos', 'Irakidis', '3');
INSERT INTO `trainers` (`first_name`, `last_name`, `subjects_id`)
VALUES ('Panagiotis', 'Bozas', '2');
INSERT INTO `trainers` (`first_name`, `last_name`, `subjects_id`)
VALUES ('Giorgos', 'Pasparakis', '4');

-- insert data to courses table --
INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`)
VALUES ('JSF21A', 'JavaScript', '0', '2021-01-01', '2021-03-31');
INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`)
VALUES ('JSP21A', 'JavaScript', '1', '2021-01-01', '2021-06-30');
INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`)
VALUES ('JF21A', 'Java', '0', '2021-01-01', '2021-03-31');
INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`)
VALUES ('JP21A', 'Java', '1', '2021-01-01', '2021-06-30');
INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`)
VALUES ('PF21A', 'Python', '0', '2021-01-01', '2021-03-31');
INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`)
VALUES ('PP21A', 'Python', '1', '2021-01-01', '2021-06-30');

-- insert data to students table --
INSERT INTO `students` (`first_name`, `last_name`, `date_of_birth`, `tuition_fees`, `oral_mark`)
VALUES ('Andreas', 'Giannopoulos', '1984-08-06', '0', '85');
INSERT INTO `students` (`first_name`, `last_name`, `date_of_birth`, `tuition_fees`, `oral_mark`)
VALUES ('Giorgos', 'Papadopoulos', '1990-09-23', '2500', '70');
INSERT INTO `students` (`first_name`, `last_name`, `date_of_birth`, `tuition_fees`, `oral_mark`)
VALUES ('Nikos', 'Georgiou', '1997-12-31', '1250', '91');
INSERT INTO `students` (`first_name`, `last_name`, `date_of_birth`, `tuition_fees`, `oral_mark`)
VALUES ('Eleni', 'Dimitriadi', '2000-01-01', '1700', '89');
INSERT INTO `students` (`first_name`, `last_name`, `date_of_birth`, `tuition_fees`, `oral_mark`)
VALUES ('Maria', 'Leka', '1979-03-17', '900', '100');

-- insert data to projects_assignments table --
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Assignment1', 'Create the HTML of a private school', '2021-01-31', '0');
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Assignment2', 'Create the CSS of a private school', '2021-02-28', '0');
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Assignment3', 'Create the Database of a private school', '2021-03-31', '0');
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Assignment4', 'Create the Back End of a private school', '2021-04-30', '0');
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Assignment5', 'Connenct the Front End and the Back End of a private school', '2021-05-31', '0');
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Project', 'Create an application', '2021-06-20', '1');
INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`)
VALUES ('Group_Project', 'Create an application with your team', '2021-06-20', '1');

-- insert data to courses_trainers table --
INSERT INTO `courses_trainers` (`courses_id`, `trainers_id`)
VALUES ('2', '1');
INSERT INTO `courses_trainers` (`courses_id`, `trainers_id`)
VALUES ('2', '2');
INSERT INTO `courses_trainers` (`courses_id`, `trainers_id`)
VALUES ('2', '3');
INSERT INTO `courses_trainers` (`courses_id`, `trainers_id`)
VALUES ('2', '4');
INSERT INTO `courses_trainers` (`courses_id`, `trainers_id`)
VALUES ('2', '5');	-- the same with courses with id(1,3,4,5,6) --

-- insert data to courses_students table --
INSERT INTO `courses_students` (`courses_id`, `students_id`)
VALUES ('2', '1');
INSERT INTO `courses_students` (`courses_id`, `students_id`)
VALUES ('2', '2');
INSERT INTO `courses_students` (`courses_id`, `students_id`)
VALUES ('2', '3');
INSERT INTO `courses_students` (`courses_id`, `students_id`)
VALUES ('2', '4');
INSERT INTO `courses_students` (`courses_id`, `students_id`)
VALUES ('2', '5');	-- the same with courses with id(1,3,4,5,6) --

-- insert data to projects_assignments_courses table --
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '1');
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '2');
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '3');
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '4');
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '5');
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '6');
INSERT INTO `projects_assignments_courses` (`courses_id`, `projects_assignments_id`)
VALUES ('2', '7');


-- insert data to groups table --
INSERT INTO `groups` (`group_name`)
VALUES ('Student1');
INSERT INTO `groups` (`group_name`)
VALUES ('Student2');
INSERT INTO `groups` (`group_name`)
VALUES ('Student3');
INSERT INTO `groups` (`group_name`)
VALUES ('Student4');
INSERT INTO `groups` (`group_name`)
VALUES ('Student5');
INSERT INTO `groups` (`group_name`)
VALUES ('Group1');
INSERT INTO `groups` (`group_name`)
VALUES ('Group2');

-- insert data to groups_students table --
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('1', '1');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('2', '2');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('3', '3');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('4', '4');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('5', '5');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('6', '1');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('6', '2');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('6', '5');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('7', '3');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('7', '4');
INSERT INTO `groups_students` (`groups_id`, `students_id`)
VALUES ('7', '5');


-- insert data to groups_projects_assignments table --
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)	-- assignments-project for student with id:1 --
VALUES ('1', '1', '90', '1');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('1', '1', '85', '2');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('1', '0', '0', '3');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('1', '0', '0', '4');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('1', '0', '0', '5');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('1', '0', '0', '6');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)	-- assignments/projects for student with id:2 --
VALUES ('2', '1', '80', '1');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('2', '1', '75', '2');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('2', '0', '0', '3');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('2', '0', '0', '4');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('2', '0', '0', '5');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('2', '0', '0', '6');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('6', '0', '0', '7');
INSERT INTO `groups_projects_assignments` (`groups_id`, `is_submitted`, `projects_assignments_mark`, `projects_assignments_id`)
VALUES ('7', '0', '0', '7');