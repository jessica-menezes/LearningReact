class Person {
    //sets a default for name in event no name is entered like for 'other' below
    constructor(name = 'Anon', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return 'Hi I am ' + this.name + '!';
        
        //New ES6 feature
        return `Hi I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

//student class also contains stuff in Person
class Student extends Person {
   constructor(name, age, major){
       //dont need to set this.name again
       //super refers to the parent class, calls the parent constructor function
       super(name, age); 
       this.major = major; 
   }
 
   hasMajor(){
       //if major has no string then !!'' = false because '' is a false value then double !! cancels out
       return !!this.major;
   }

   //can over ride method from parent class
   getDescription(){
       let description = super.getDescription();

       //checks if current student instance has this
       if(this.hasMajor()){
           description += ` Their major is ${this.major}.`; //same as description = description + ''; concatenating description
       }
       return description;
   }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

 const me = new Traveler('Jessica', 22, 'Macau');
 //can access the methods in the individual instances of our class
 console.log(me.getGreeting());

 const other = new Traveler();
 console.log(other.getGreeting());