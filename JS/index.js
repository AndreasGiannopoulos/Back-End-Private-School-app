const Person = require('./person.js')
const Student = require('./student.js')
const Trainer = require('./trainer.js')
const Project = require('./project.js')
const Course = require('./course.js')
const Group = require('./groups.js')
const Subject = require('./subject.js')

const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3307',
//     user: 'root',
//     password: '1234',
//     database: 'private_school'
// });

// let sql = "SELECT * FROM students;"
// let sql2 = "SELECT * FROM trainers;"
// let sql3 = "SELECT * FROM projects_assignments;"
// let sql4 = "SELECT * FROM courses;"
// function myCallBack(err, results, fields){
//     if(err){ 
//         console.log(err)
//         throw "MyError"
//     }else{
//         console.log(results)
//     }

// }
// console.log("***** Students List *****")
// connection.query(sql, myCallBack)
// console.log("***** Trainers List *****")
// connection.query(sql2, myCallBack)
// console.log("***** Assignments List *****")
// connection.query(sql3, myCallBack)
// console.log("***** Courses List *****")
// connection.query(sql4, myCallBack)
// connection.end()  

const student1 = new Student("Aaaa", "Bbbb", "1900-01-01", "500", 0)   //CREATE NEW STUDENT 
student1.read()

// student1.firstName = "alekos"
// connection.query(sql, myCallBack)  
// student1.update()

// const trainer1 = new Trainer("Aaaa", "Bbbb", 1)     //CREATE NEW TRAINER 
// trainer1.create()

// const course1 = new Course("Aaaa", "Bbbb", 1, "2021-01-01", "2021-03-31",)     //CREATE NEW COURSE 
// course1.create()

// const project1 = new Project("Aaaa", "Bbbb Cccc Dddd", "2021-07-23", 0)     //CREATE NEW PROJECT 
// project1.create()

// const group2 = new Group("Ampaloi")     //CREATE NEW GROUP 
// group2.create()

// const subject12 = new Subject("Aaaa")     //CREATE NEW SUBJECT 
// subject12.create()

