// arguments objects - no longer bound with arrow functions but will 
//work with this function bellow

 //const add = function(a, b){
   //  console.log(arguments);
    //return a + b;
 //};

 

 //arguments not work in this
//const add = (a,b) => {
  //  console.log(arguments);
    //return a + b;
//};
 
//console.log(add(22,333,1));


//this keyword - no longer bound 
const user = {
    name : 'Jess',
    cities : ['Macau', 'Henlow', 'Ware'],
    printPlacesLives: function(){
        //this will work as its accessible 
        console.log(this.name);
        console.log(this.cities);
        //a work-around is to use 
        const that = this;
        console.log('heere',this);
        //this.name will not work as its not accessible inside this function
        this.cities.forEach(function (city){
            //console.log(that.name + " has lived in " + city);
        });
 
        //a work around is to use arrow functions, then u can use this.
        this.cities.forEach((city) =>{
            //console.log(this.name + " has lived in " + city);
        });
    },

      printPlaces(){ //map allows you to transform each item, getting a new array back
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlaces());

//Challenge
const multiplier = {
    number : [1, 3],
    multiplyBy : [4],
    multiply(){
        return this.number.map((x) => this.multiplyBy * x);
    }
};
console.log(multiplier.multiply());