 const nameInput = document.querySelector('.name')
 const errorName = document.querySelector('.errorName')
 const firstNameInput = document.querySelector('.firstName')
 const errorFirstName = document.querySelector('.errorFirstName')
 const lastNameInput = document.querySelector('.lastName')
 const errorLastName = document.querySelector('.errorLastName')
 const emailInput = document.querySelector('.e-mail')
 const errorEmail = document.querySelector('.errorEmail')
 const passwordInput = document.querySelector('.pass')
 const errorPass = document.querySelector('.errorpass')
 const checkPasswordInput = document.querySelector('.checkPass')
 const errorCheckPass = document.querySelector('.errorCheckPass')
 const submit = document.querySelector('.submit')
 const registration = document.querySelector('#registration')

 registration.addEventListener('submit', (e) => {
     e.preventDefault()

     let name = nameInput.value;
     let firstName = firstNameInput.value;
     let lastName = lastNameInput.value;
     let email = emailInput.value;
     let password = passwordInput.value;
     let checkPassword = checkPasswordInput.value;

     if (name.length >= 3 &&
         firstName.length >= 3 &&
         lastName.length >= 3 &&
         email.length >= 3 &&
         password.length >= 3 && password.length <= 8 &&
         checkPassword.length >= 3 && checkPassword.length <= 8 &&
         checkPassword === password){
         alert('successful registration')
     } else if (name.length < 3) {
         alert('check your details')
         errorName.innerHTML = 'your word must be at least 3 characters'
     } else if (firstName.length < 3) {
         alert('check your details')
         errorFirstName.innerHTML = 'your word must be at least 3 characters'
     } else if (lastName.length < 3) {
         alert('check your details')
         errorLastName.innerHTML = 'your word must be at least 3 characters'
     } else if (email.length < 3) {
         alert('check your details')
         errorEmail.innerHTML = 'your word must be at least 3 characters'
     } else if (password.length < 3 || password.length > 8) {
         alert('check your details')
         errorPass.innerHTML = 'your word must be at least 3 characters and no more than 8'
     } else if (checkPassword !== password && password !== checkPassword) {
         alert('check your details')
         errorCheckPass.innerHTML = 'Your passwords do not match'
     }
 } )