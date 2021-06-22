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

class Group {
    constructor(groupName) {
        this._groupName = groupName
    }

    get groupName(){
        return this._groupName
    }

    set groupName(value){
        this._groupName = value
    }

    create(){        
        let sql = "INSERT INTO `groups` (`group_name`) VALUES ('" + this.groupName + "');"
        console.log(`A new ${this.constructor.name} has been added, with name: ${this.groupName}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    read() {
        let sql = "SELECT * FROM `groups` WHERE id= '" + this.id + "'"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.groupName}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    update(){
        let sql = "UPDATE `groups` SET group_name = '" + this.groupName + "') WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with name: ${this.groupName} has been updated`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    delete(){
        let sql = "DELETE FROM `groups` WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with name: ${this.groupName} has been deleted`)
        connection.query(sql, myCallBack)   
        connection.end()
    }
}
module.exports = Group