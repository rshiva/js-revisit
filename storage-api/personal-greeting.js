const rememberDiv = document.querySelector('.remember')
const forgetDiv = document.querySelector('.forget')
const form = document.querySelector('form')
const nameInput = document.querySelector('#entername')
const submitBtn = document.querySelector('#submitname')
const forgetBtn = document.querySelector('#forgetname')

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');


submitBtn.addEventListener("submit", function(e){
  e.preventDefault();
});

submitBtn.addEventListener("click",function(){
  localStorage.setItem("name", nameInput.value);
  nameDisplayCheck();
})

forgetBtn.addEventListener("click",function(){
  localStorage.removeItem("name");
  nameDisplayCheck();
})

function nameDisplayCheck(){
  let name = localStorage.getItem("name")
  if(name){
    h1.textContent = 'Welcome, ' + name;
    personalGreeting.textContent = 'Welcome to my website, ' + name + '! We hope you have fun while you are here.';
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  }else{
    h1.textContent = 'Welcome to my website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}
document.body.onload = nameDisplayCheck;