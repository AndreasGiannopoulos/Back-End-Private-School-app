class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }


    create(){
        console.log(`A new ${this.constructor.name} with first name: ${this.firstName} and with last name: ${this.lastName} has been added`)
    }


    delete(){
        console.log(`The ${this.constructor.name} with first name: ${this.firstName} and with last name: ${this.lastName} has been deleted`)
    }

    update(){
        console.log(`The ${this.constructor.name} with first name: ${this.firstName} and with last name: ${this.lastName} has been updated`)
    }

    toString(){
        return `${this.constructor.name}: ${this.firstName}, ${this.lastName}`
    }
}
module.exports = Person