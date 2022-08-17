//step:1 add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // step:2 get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    //step:3 to get password inside the password input field
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // console.log(email, password);

    //Danger: Do not verify email, password on the cliet side
    //step:4 verify email and password

    if(email === 'mujahidulamin1108152@gmail.com' && password === 'tareq123'){
        window.location.href = 'bank.html';
    }else{
        alert('Email or password did not match');
    }

    
})