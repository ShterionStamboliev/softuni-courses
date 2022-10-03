function validate() {
    
    document.getElementById('company').addEventListener('change', () => {
         if (document.getElementById('company').checked) {
             document.getElementById('companyInfo').style.display = 'block';
         } else {
             document.getElementById('companyInfo').style.display = 'none';
         }
     });
     
     document.getElementById('submit').addEventListener('click', e => {
         e.preventDefault();
         const invalidFields = [];
         const usernameField = document.getElementById('username');
         const emailField = document.getElementById('email');
         const passwordField = document.getElementById('password');
         const confirmPasswordField = document.getElementById('confirm-password');
         const companyCheckBox = document.getElementById('company');
         const companyNumber = document.getElementById('companyNumber');
         const companyInfo = document.getElementById('companyInfo');
         const validDiv = document.getElementById('valid');
         const usernameReg = /^[\w\d]{3,20}$/;
         const passwordReg = /^\w{5,15}$/;
         const emailReg = /^[^@.]+@[^@]*\.[^@]*$/;
 
         if (usernameReg.test(usernameField.value)) {
             usernameField.style.border = 'none';
             invalidFields.push(true);
         } else {
             usernameField.style.borderColor = 'red';
             invalidFields.push(false);
         }
 
         if (passwordReg.test(passwordField.value) && passwordField.value === confirmPasswordField.value) {
                 passwordField.style.border = 'none';
                 confirmPasswordField.style.border = 'none';
                 invalidFields.push(true);
             } else {
                 passwordField.style.borderColor = 'red';
                 confirmPasswordField.style.borderColor = 'red';
                 invalidFields.push(false);
             }
             
             if (emailReg.test(emailField.value)) {
                 emailField.style.border = 'none';
                 invalidFields.push(true);
             } else {
                 emailField.style.borderColor = 'red';
                 invalidFields.push(false);
             }
             if (companyCheckBox.checked) {
                 if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                     companyNumber.style.borderColor = 'red';
                     invalidFields.push(false);
                 } else {
                     companyNumber.style.borderColor = '';
                     invalidFields.push(true);
             }
         }
         if (!invalidFields.includes(false)) {
             validDiv.style.display = 'block';
         } else {
             validDiv.style.display = 'none';
         }
     });
 }   