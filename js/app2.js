let num1 = 10;
let num2 = 3;
let result = num1 % num2;

// console.log(result);
// +, -, *, /, %

// Write a if-else statement to check
// if num1 is greater than num2
    // if greater, print yes to the console
    // else, print no

function numChecker() {
    if(num1 > num2) {
        console.log("Yes");
    } else if (num1 == num2) {
        console.log("Equal");
    } else {
        console.log("No");
    }
}

// Functions - intro
function print() {
    console.log(result);
}

numChecker();
print();

// Us Js to print in Html
msgId = document.getElementById('txt');
msgId2 = document.getElementById('txt2');
successMsg = "Verified successfully!";
tryAgainMsg = "Still unverified, try again!";

// msgId.innerText = successMsg;
// msgId2.textContent = tryAgainMsg;

// Increment and decrement


// Loops - for, while, doWhile, forEach
