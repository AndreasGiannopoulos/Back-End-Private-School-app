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

class Trainer extends Person{
    constructor(firstName, lastName, subject){
        super(firstName, lastName)
        this._subject = subject        
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

    get subject(){
        return this._subject
    }

    set subject(value){
        this._subject = value
    }
    
    create(){        
        let sql = "INSERT INTO `trainers` (`first_name`, `last_name`, `subjects_id`) VALUES ('" + this.firstName + "', '" + this.lastName + "', '" + this.subject+ "')"
        console.log(`A new ${this.constructor.name} has been added. With first name: ${this.firstName},  last name: ${this.lastName}, subject:${this.subject}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    read() {
        let sql = "SELECT * FROM `trainers` WHERE id= '" + this.id + "'"
        console.log(`A new ${this.constructor.name} has been added. With first name: ${this.firstName},  last name: ${this.lastName}, subject:${this.subject}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    update(){
        let sql = "UPDATE `trainers` SET first_name = '" + this.firstName + "', last_name = '" + this.lastName + "', subjects_id = '" + this.subject+ "') WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with first name: ${this.firstName} and with last name: ${this.lastName} has been updated`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    delete(){
        let sql = "DELETE FROM `trainers` WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with first name: ${this.firstName},  last name: ${this.lastName}, subject:${this.subject} has been deleted`)
        connection.query(sql, myCallBack)   
        connection.end()
    }
}
module.exports = Trainer