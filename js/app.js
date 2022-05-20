// Inline, Internal, external JavaScript
// comments
// Variables
// Data types

// Strings

// Numbers - Int, Floats
// Boolean
// Null, Undefined
// concatenation
// using backticks

// typeOf


// console.log(fname + ', dept: ' + dept + ' ' + id);
// console.log(`${fname} - ${id} : ${dept} department.`);
// console.log(typeof(pass));


// verification function
function verify(id, user, pass, idNumber) {
    id = 11;
    pass = true;
    user = "John Doe";

    // receiving the user id for validation
    idNumber = window.prompt('Insert ID');

    if(idNumber == id && pass) {
        let msg = `Welcome, ${user}`
        document.getElementById('user').textContent = msg;
        
        console.log(msg);
    } else {
        window.alert("Verification failed");
        console.log("verification failed");
    }
}
