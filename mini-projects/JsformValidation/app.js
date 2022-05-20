let loginDisplay = document.getElementById('loginId');

const noDisplay = () => {
    loginDisplay.style.display = 'none';
}

noDisplay();

const displayLoginForm = () => {
    loginDisplay.style.display = 'block';
}

const formValidator = (email, pwd, err) => {
    email = document.getElementById('email').value;
    pwd = document.getElementById('pwd').value;
    err = document.getElementById('errMsg');

    if(email === 'john' && pwd === 'abc') {
        noDisplay();
        windows.alert('Welcome to your dashboard!');
    } else {
        err.textContent = 'Wrong details, try again :)';
        err.style.color = 'red';
    }
}