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
        return `${this.name} is ${this.age} year(s) old`;
    }
}

 const me = new Person('Jessica', 22);
 //can access the methods in the individual instances of our class
 console.log(me.getDescription());

 const other = new Person();
 console.log(other.getDescription());