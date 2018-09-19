console.log("hello");

class Person {
    constructor(name = "Anonymous" , age = 0){
        this.name = name;
        this.age = age
    }
    getGreeting(){
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, major="undecided"){
        super(name,age);
            this.major = major;        
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let Desc = super.getDescription();
        if(this.hasMajor()){
            return Desc + " and my major is " + this.major;
        }
    }
    
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let Greet = super.getGreeting();
        if(this.hasLocation ()){
            return Greet + " and I am visiting from " + this.homeLocation;
        }
    }
}

const me = new Traveller("Mayank" , 21 , "Assam");
//console.log(me.getDescription());
console.log(me.getGreeting());

const x = new Student();
//console.log(x.getDescription());
console.log(me.getGreeting());