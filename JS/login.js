// step-1:add click event handle with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //Step-2:get the email address inside the input field
    //Always remember to use .value to get text from an input value
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    // console.log(email)

    //Step-3:get password
    // 3.a: set id on the html Element
    // 3.b: set the Element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    // console.log(email, password)
    
    // do not verify email password on the client side

    // step-4: verify email and password and check whether valid user or not
    if (email === 'akashvora@tara.com' && password === 'secret') {
        window.location.href='./bank.html'
    }
    else {
        alert('durrr e giyee mor')
    }
})