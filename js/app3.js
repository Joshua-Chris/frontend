// getElementById
function getElementById() {
    let msg = 'Welcome to the dashboard';
    let msgTag = document.getElementById('text__area');
    msgTag.textContent = msg;
}
getElementById();


// querySelector
function querySelector(txt, txtTag) {
    txt = 'Using javascript querySelector';
    txtTag = document.querySelector('.text__area');
    txtTag.textContent = txt;

}
// querySelector();


// Arrow functions
const alert = message => window.alert(message);

// alert('Welcome!');

// Using arrow function in js, replace the text in ".text__area"
const textReplacer = (newTxt, tag) => {
    newTxt = "Welcome to Javascript";
    tag = document.querySelector('.text__area');
    tag.textContent = newTxt;
}
// textReplacer();

// arrays
// printing the smallest integer in an array

// ...
const basicOp = (operation, value1, value2) => {
  if(operation == '+')return value1 + value2;
  if(operation == '-')return value1 - value2;
  if(operation == '*')return value1 * value2;
  if(operation == '/')return value1 / value2;
}
basicOp('+', 4, 7);
basicOp('-', 15, 18);
basicOp('*', 5, 5);
basicOp('/', 49, 7);


// for loops



// create a for loop that counts from 5 - 100 in steps of 5


// create a for loop that counts from 10 - 100 in steps of 10


// Create a dice function


// objects
