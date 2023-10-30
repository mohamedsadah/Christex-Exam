//class creation

class Person {
    constructor(firstName, lastName, age){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.age = age;
    }

    fullName(){
        return `${this.FirstName} ${this.LastName}`;
    }
    Introduce(){
        return `Hello My name is ${this.fullName()} and i am ${this.age} years old`;
    }
}

//creating Instances

const sada = new Person ("John", "Doe", 30);
console.log(sada.Introduce());