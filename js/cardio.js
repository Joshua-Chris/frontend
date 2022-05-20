const pwdValidator = (pwd) => {
    pwd = 'ABCDE';
    
    if(pwd.length < 8) {
        console.log('passwords should at least be 8 characters');
    } else {
        console.log('password created');
    }
}

// pwdValidator();

const userAuth = (user, pwd) => {
    user = 'Ben';
    pwd = 'abcd';

    if(user == 'Ben' && pwd == 'abcd') {
        console.log('You are logged in!');
    } else if (user == 'Ben' && pwd !== 'abcd') {
        console.log('Wrong password');
    } else if (user !== 'Ben' && pwd == 'abcd') {
        console.log('Wrong username');
    } else if (user !== 'Ben' && pwd !== 'abcd') {
        console.log('Wrong username and password!');
    } else {
        console.log('You are logged in!');
    }
}

userAuth();