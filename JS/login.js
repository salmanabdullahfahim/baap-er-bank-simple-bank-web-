// step1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step2: get the email address inside the email input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step3: get the password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //Danger: Do not verify email and password from client side
    //step-4: verify email and password . check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
       window.location.href = 'bank.html';
    }
    else{
        alert('Tumi Password vule geso');
    }
})