
// Template Literals and Default Parameters Value
function favMovie(name = 'James', movie = 'The room') {
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
}
favMovie("Dalton");

// Arrow Functions
let msg = (name = 'James', movie = 'Into the Wild') => console.log(`my name is ${name} and my favorite movie is ${movie}`);
msg();

let getFName = fullname => {
    let names = fullname.split(' ');
    return names[0];
}
console.log(getFName("James Ward"));

let getFName2 = fullname => console.log(fullname.split(' ')[0]); // not working
getFName('Dalton Ward');


let objectLit = (num1, num2) => {
    let obj = {
        exp: Math.pow(num1, num2),
        sum: num1+num2
    };
    console.log(`The exp is: ${obj.exp} and the sum is ${obj.sum}`);
}
objectLit(2, 3);

// Spread Syntax
let arr = ["Paul", "Birmingham", "Kimchi"]
let fun = (name, location, favFood) => {
    console.log(`Name is ${name}, location is ${location}, and fav food is ${favFood}`);
}
fun(...arr);


let myName = "James Dalton Ward";
let newFun = (words) => {
    let wordsA = [...words];
    for (w of wordsA) {
        console.log(w);
    }
}
newFun(myName);



