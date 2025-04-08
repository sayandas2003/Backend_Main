// function PersonMaker (name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return person;
// }


// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("eve", 20);





// constructors - doesn't return anything & start with capital
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);




// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk () {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);



class Person {
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}



class Student extends Person{
    constructor(name, age, marks) {
        // this.name = name;
        // this.age = age;
        console.log("student class constructor");
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
    // talk() {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}

// let stu1 = new Student("adam", 25, 95);



class Teacher extends Person{
    constructor(name, age, subject) {
        // this.name = name;
        // this.age = age;
        
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
    // talk() {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}







class Mammal {      // base or parent class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}


class Dog extends Mammal {      //child
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("woof..");
    }
}

class Cat extends Mammal {      //child
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("Meow..");
    }
}