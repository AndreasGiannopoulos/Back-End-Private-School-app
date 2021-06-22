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

class Subject {
    constructor(title) {
        this._title = title
    }

    get title(){
        return this._title
    }

    set title(value){
        this._title = value
    }

    create(){        
        let sql = "INSERT INTO `subjects` (`title`) VALUES ('" + this.title + "');"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.title}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    read() {
        let sql = "SELECT * FROM `subjects` WHERE id= '" + this.id + "'"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.title}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    update(){
        let sql = "UPDATE `subjects` SET title = '" + this.title + "') WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with title: ${this.title} has been updated`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    delete(){
        let sql = "DELETE FROM `subjects` WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with title: ${this.title} has been deleted`)
        connection.query(sql, myCallBack)   
        connection.end()
    }
}
module.exports = Subject