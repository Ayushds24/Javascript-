//constant or const
const name = 'Ayush'

console.log(name)

//ones a const is created we connot change the value of it 
//name = 'Arjun';
//console.log(name);
// it will give a error typeerror: assignment to constant variable

let accountEmail = "ayush2410@gmail.com"
console.log(`accountEmail, ${accountEmail}`)


var accountPassword = "ayush#2410"
console.log(`accountPassword, ${accountPassword}`)

const age = 10

if(age > 0) {
    console.log('-----------------------------')
    console.log('Now we have updated both varibable value inside if statement')
    // Now we will change the value of both the variable
    let accountEmail = "ayush2498@gmail.com"
    var accountPassword = "ayush#2498"

    //we will print this on console
    console.log(`accountEmail, ${accountEmail}`)
    console.log(`accountPassword, ${accountPassword}`)
}
console.log('-----------------------------')
console.log('Now the if statement is over now again we will print the value of variable and see what is the output')
// Now the if statement is over now again we will print the value of variable and see what is the output
console.log(`accountEmail, ${accountEmail}`)
console.log(`accountPassword, ${accountPassword}`)
