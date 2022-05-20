// Declare global variables
let count = 0;
let counter = document.querySelector('#counter');
let points = document.querySelector('#score-points');

// Incrementor function
const increment = () => {
    for(i = 0; i <= 0; i++) {
        count++;
        counter.textContent = count;
    }
}

// Decrementor function
const decrement = () => {
    if(count > 0) {
        --count;
        counter.textContent = count;
    } else {
        window.alert("0 is the minimum!");
    }
}

// Reset function
const reset = () => {
    points.textContent += `${count} - `;
    count = 0;
    counter.textContent = count;
}