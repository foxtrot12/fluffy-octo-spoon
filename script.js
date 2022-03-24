const form = document.getElementById('form');
const name = document.getElementById('name');
const add = document.getElementById('add');
const pNo = document.getElementById('pNo');
const password = document.getElementById('password');

//Event listner for button

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

//Invoke .error class of style

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//Invoke .success class of style

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const nameValue = name.value.trim();
    const addValue = add.value.trim();
    const pNoValue = pNo.value.trim();
    var passwordValue = password.value.trim();
    var upr = /[A-Z]/;
    var lwr = /[a-z]/;
    var num = /[0-9]/;
    var spc = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/;

    //Check conditions for name

    if(nameValue === '') {
        setError(name, 'name is required');
    } else if(nameValue != nameValue.toUpperCase()) {
        setError(name, 'name must be uppercase');
    } else {
        setSuccess(name);
    }

    //Check conditions for address

    if(addValue === '') {
        setError(add, 'address is required');
    } else {
        setSuccess(add);
    }

    //Check conditions for phone number

    if(pNoValue === '') {
        setError(pNo, 'Phone number is required');
    } else if (pNoValue.length != 10 ) {
        setError(pNo, 'Phone number must be 10 numbers.')
    } else {
        setSuccess(pNo);
    }

    //Check conditions for password

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if ((passwordValue.length < 8)) {
        setError(password, 'Password must be at least 8 character.')
    }
    else if(!(passwordValue.match(upr) && passwordValue.match(lwr) && passwordValue.match(num) && passwordValue.match(spc))){
        setError(password,'The password must have at least one Upper Case, one Lower Case, one number and one special character');
    }
    else {
        setSuccess(password);
    }

};
