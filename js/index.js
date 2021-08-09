// Iteration 1: Names and Input
const hacker1 = "Peter"; 
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Paulo";
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length){
    console.log(`Wow you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(` driver has the longest name, it has ${hacker1.length} characters`);
 } else {
     console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 }

// Iteration 3: Loops


let driverNameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i > 0);
    driverNameWithSpaces = driverNameWithSpaces + hacker1[i] + " ";
}

console.log(driverNameWithSpaces.toUpperCase());


let navigatorNameBackwards = "";
for (let i = hacker2.length -1; i >= 0; i-- ) {
    navigatorNameBackwards = navigatorNameBackwards + hacker2[i];
}

console.log(navigatorNameBackwards);

if (hacker1 > hacker2){
    console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
