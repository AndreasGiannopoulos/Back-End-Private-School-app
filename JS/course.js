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

class Course {
    constructor(title, stream, type, startDate, endDate){
        this._title = title
        this._stream = stream
        this._type = type
        this._startDate = startDate
        this._endDate = endDate
    }

    get title(){
        return this._title
    }

    set title(value){
        this._title = value
    }

    get stream(){
        return this._stream
    }

    set stream(value){
        this._stream = value
    }

    get type(){
        return this._type
    }

    set type(value){
        this._type = value
    }

    get startDate(){
        return this._startDate
    }

    set startDate(value){
        this._startDate = value
    }

    get endDate(){
        return this._endDate
    }

    set endDate(value){
        this._endDate = value
    }


    create(){        
        let sql = "INSERT INTO `courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('" + this.title + "', '" + this.stream + "', '" + this.type + "', '" + this.startDate + "', '" + this.endDate+ "');"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.title},  stream: ${this.stream}, type:${this.type},  starting date: ${this.startDate}, ending date:${this.endDate}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    read() {
        let sql = "SELECT * FROM `courses` WHERE id= '" + this.id + "'"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.title},  stream: ${this.stream}, type:${this.type},  starting date: ${this.startDate}, ending date:${this.endDate}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    update(){
        let sql = "UPDATE `courses` SET title = '" + this.title + "', stream = '" + this.stream + "', type = '" + this.type+ "', start_date = '" + this.startDate + "', end_date = '" + this.endDate+ "') WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with first title: ${this.title},  stream: ${this.stream}, type:${this.type},  starting date: ${this.startDate}, ending date:${this.endDate} has been updated`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    delete(){
        let sql = "DELETE FROM `courses` WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with title: ${this.title},  stream: ${this.stream}, type:${this.type},  starting date: ${this.startDate}, ending date:${this.endDate} has been deleted`)
        connection.query(sql, myCallBack)   
        connection.end()
    }
}
module.exports = Course