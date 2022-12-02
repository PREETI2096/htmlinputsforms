/*UC1*/ 
const name = document.querySelector('#text')
const textError = document.querySelector('.text-error')
text.addEventListener('input',function () {
let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
if (nameRegex.test(name.value))
   {
       textError.textContent = ""
   }
else
   {
       textError.textContent = "Name is Incorrect"
   } 
});
/*UC2*/ 
  
const email = document.querySelector('#email')
const emailError = document.querySelector('.email-error')
email.addEventListener('input' , function(){
   let emailRegex = RegExp("^[abc]+[-_+.]?+[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]*{1}[a-z]{2}$")
if (emailRegex.test(email.value)) {
   emailError.textContent = ""
}
else{
   emailError.textContent = "Email is Incorrect"
}
});

/*UC3*/
const number = document.querySelector('#tel')
const numberError = document.querySelector('.tel-error')
number.addEventListener('input',function(){
let phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$")
if (phoneNumberRegex.test(number.value))
{
   numberError.textContent = ""
}
else
{
   numberError.textContent ="Phone number is incorrect"
}
});
/*UC4*/

const password = document.querySelector('#pwd')
const passwordEror = document.querySelector('.pwd-error')
password.addEventListener('input',function(){
let passwordRegex = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$%^&-+@]).{8,}")
if (passwordRegex.test(password.value))
{
   passwordEror.textContent = ""
}
else
{
   passwordEror.textContent = "Password is incorrect"
}
});

const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent = salary.value;
salary.addEventListener('input', function () {
   output.textContent = salary.value
});    