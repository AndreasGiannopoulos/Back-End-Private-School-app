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

class Project {
    constructor(title, description, deadLine, isProject){
        this._title = title
        this._description = description
        this._deadLine = deadLine
        this._isProject = isProject        
    }

    get title(){
        return this._title
    }

    set title(value){
        this._title = value
    }

    get description(){
        return this._description
    }

    set description(value){
        this._description = value
    }

    get isProject(){
        return this._isProject
    }

    set isProject(value){
        this._isProject = value
    }

    get deadLine(){
        return this._deadLine
    }

    set deadLine(value){
        this._deadLine = value
    }

    create(){        
        let sql = "INSERT INTO `projects_assignments` (`title`, `description`, `sub_date`, `is_project`) VALUES ('" + this.title + "', '" + this.description + "', '" + this.deadLine + "', '" + this.isProject + "');"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.title},  description: ${this.description},  deadline: ${this.deadLine}, is project:${this.isProject}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    read() {
        let sql = "SELECT * FROM `projects_assignments` WHERE id= '" + this.id + "'"
        console.log(`A new ${this.constructor.name} has been added, with title: ${this.title},  description: ${this.description},  deadline: ${this.deadLine}, is project:${this.isProject}`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    update(){
        let sql = "UPDATE `projects_assignments` SET title = '" + this.title + "', description = '" + this.description + "', sub_date = '" + this.deadLine+ "', is_project = '" + this.isProject + "') WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with first title: ${this.title},  description: ${this.description},  deadline: ${this.deadLine}, is project:${this.isProject} has been updated`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

    delete(){
        let sql = "DELETE FROM `projects_assignments` WHERE id= '" + this.id + "'"
        console.log(`The ${this.constructor.name} with title: ${this.title},  description: ${this.description},  deadline: ${this.deadLine}, is project:${this.isProject} has been deleted`)
        connection.query(sql, myCallBack)   
        connection.end()
    }

}
module.exports = Project