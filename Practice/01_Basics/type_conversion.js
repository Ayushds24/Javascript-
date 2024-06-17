let score = 33

console.log(`Datatype of ${score} is ${typeof score}`);
// it will return number which is the data type of score variable 

// Now Suppose we get number i string type 
let score1 = "33"

console.log(typeof score1);
// it will return string which is the type of score1 vaiable 
// now to convert string number into number we will use Number() method
const valueInNumber = Number(score1);

console.log(`Datatype of ${score1} is ${typeof valueInNumber}`);

//Now what if we get a non number string and we are type to convert it into number 
let score2 = "33b4"
const valueInNumber1 = Number(score2);
console.log(typeof valueInNumber1);