const signup = document.querySelector('.signUp');
const para = document.querySelector('.para');
const header = document.querySelector('.header');
const nameF = document.getElementById('name');
const confpass = document.getElementById('confPass');
const a = document.querySelector('a');
const login = document.querySelector('login');

signup.addEventListener('click',()=>{
    header.innerHTML = "Sign Up"
    nameF.classList.toggle("name");
    confpass.classList.toggle("confPass");
    para.classList.add("add");
    a.classList.add("add");
    login.value = "Sign Up"
})