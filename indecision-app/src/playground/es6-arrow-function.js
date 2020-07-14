const square = function(x){
    return x * x;
};
//or
//here the function has a name square1 which u can then call later
function square1(x){
    return x * x;
};

//all arrow functions are anonymous, they dont have a function name 
//so need to assign it to a variable like shown
//const squareArrow = (x) => {
  //  return x * x;
//};

//dont need to say return
const squareArrow = (x) => x * x;

console.log(squareArrow(8));


//Challenge
const getFirstName = (FullName) => FullName.split(' ')[0]; //split returns back an array

console.log(getFirstName('Jess M'));
