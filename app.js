const form = document.getElementById("form")

const username = document.getElementById("username")

const email = document.getElementById("email")

const password = document.getElementById("password")

const password2 = document.getElementById("password2")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === "") {
        // show error
        // add error class
        setErrorFor(username, "Username cannot be blank");
    } else {
        // add success class
        setSuccessFor(username)
    }

    if (emailValue === "") {
        // show error
        // add error class
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        // show error
        // add error class
        setErrorFor(password, "Password cannot be blank");
    } else {
        // add success class
        setSuccessFor(password);
    }

    if (password2Value === "") {
        // show error
        // add error class
        setErrorFor(password2, "Password confirmation cannot be blank");
    } else if(password2Value !== passwordValue){
        setErrorFor(password2, "Password does not match")
    } else {
        setSuccessFor(password2);
    }

    // show success message if everything is success
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small')

    // add error message inside small
    small.innerText = message

    // add error class 
    formControl.className = 'form-control error'
}


function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control

    // add success class 
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    )
}