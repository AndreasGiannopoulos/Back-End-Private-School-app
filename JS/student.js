const Person = require('./person')
const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '1234',
    database: 'private_school'
});

function myCallBack(err, results, fields){
    if(err){ 
        console.log(err)
        throw "MyError"
    }else{
        console.log(results)
    }
}

class Student extends Person{
    constructor(firstName, lastName, dateOfBirth, fees, oralMark){
        super(firstName, lastName)
        this._dateOfBirth = dateOfBirth
        this._fees = fees
        this._oralMark = oralMark
    }

    get firstName(){
        return this._firstName
    }

    set firstName(value){
        this._firstName = value
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        this._lastName = value
    }

    get dateOfBirth(){
        return this._dateOfBirth
    }

    set dateOfBirth(value){
        this._dateOfBirth = value
    }

    get fees(){
        return this._fees
    }

    set fees(value){
        this._fees = value
    }

    get fees(){
        return this._oralMark
    }

    set fees(value){
        this._oralMark = value
    }

    create(){        
        let sql = "INSERT INTO `students` (`first_name`, `last_name`, `date_of_birth`, `tuition_fees`) VALUES ('" + this.firstName + "', '" + this.lastName + "', '" + this.dateOfBirth+ "', '" + this.fees + "');"
        console.log(`A new ${this.constructor.name} has been added. With first name: ${this.firstName},  last name: ${this.lastName}, date of birth:${this.dateOfBirth}, fees:${this.fees} `)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    read() {
        let sql = "SELECT * FROM `students` WHERE id = '" + this.id + "'"
        console.log(``)
        connection.query(sql, myCallBack) 
        connection.end()
    }

    update(){
        let sql = "UPDATE `students` SET first_name = '" + this.firstName + "', last_name = '" + this.lastName + "', date_of_birth = '" + this.dateOfBirth+ "', tuition_fees = '" + this.fees + "') WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with first name: ${this.firstName} and with last name: ${this.lastName} has been updated`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    delete(){
        let sql = "DELETE FROM `students` WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with first name: ${this.firstName},  last name: ${this.lastName}, date of birth:${this.dateOfBirth}, fees:${this.fees}, oral mark: ${this.oralMark} has been deleted`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    totalMark(){
       
        function myCallBack(err, results, fields){
            if(err){ 
                console.log(err)
                throw "MyError"
            }else{
                console.log(results)
            }
        }
        
        let sql = "SELECT students.last_name, students.first_name, courses.stream, projects_assignments.title, groups_projects_assignments.projects_assignments_mark, students.oral_mark FROM ((((((courses INNER JOIN projects_assignments_courses ON courses.id = projects_assignments_courses.courses_id) INNER JOIN projects_assignments ON projects_assignments_courses.projects_assignments_id = projects_assignments.id) INNER JOIN groups_projects_assignments ON projects_assignments.id = groups_projects_assignments.projects_assignments_id) INNER JOIN `groups` ON groups_projects_assignments.groups_id = `groups`.id) INNER JOIN groups_students ON `groups`.id = groups_students.groups_id) INNER JOIN students ON groups_students.students_id = students.id) WHERE students.id = 1"
        //'" + this.id + "'
        
        connection.query(sql, myCallBack)
        connection.end()
    }   
    
}
module.exports = Student



 
 
 
 
 
 
 
 
 
 
 
// let asd = function() {
//     connect.connect(function(err){
//         if (err) throw err
//         console.log("Connected")
//         connect.query("INSERT INTO `assignment_final`.`student`(`first_name`, `last_name`, `dob`, `fees`, `course_id`) VALUES ('" + student1.first_name + "', '" + student1.last_name + "', '" + student1.dob + "', '" + student1.fees + "', '" + student1.course_id + "')"), function(err, result) {
//                     //  console.log("To kana")  
//                     if(err) throw err
                        
//                     }
//     })
// }
// asd()
