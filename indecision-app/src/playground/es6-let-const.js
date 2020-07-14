//nameVar will overwrite the variable nameVar with Jess
var nameVar = 'Andrew';
var nameVar = 'Jess';
console.log('nameVar', nameVar);

//can reassign nameLet but cannot re-define
let nameLet = 'Hal';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//cannot re-define or even reassign with const
const nameConst = 'Karen';
console.log('nameConst', nameConst);


//Block Scoping

var fullName = 'Jessica Menezes';

if (fullName){
    //var based variables are function scoped 
    var firstName = fullName.split(' ')[0]; //splits based on the space then gets the first index
    console.log(firstName);  
}

console.log(firstName); //since first name is var, 'Jeesica' will be printed, otherwise if let or const, will not 
