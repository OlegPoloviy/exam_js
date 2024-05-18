export let loggedIn = false

let regButton =document.getElementsByClassName('reg')[0]
let form = document.getElementById('register')

regButton.onclick = function (){
    form.style.visibility = 'visible'
}

let closeButton = document.getElementById('close')

closeButton.onclick = function ($event){
    $event.preventDefault()
    form.style.visibility = 'hidden'
}
//getting data from a form
class User{
    constructor(name,pass,repass){
        this.username = name
        this.password = pass
        this.repassword = repass
    }
}

let users = []

function saveUsers(users) {
    localStorage.setItem('users',JSON.stringify(users))
}

let register = document.getElementById('registerBtn')

//getting data on click
register.onclick = function ($event){
    $event.preventDefault()

    const name = document.forms.register.name.value
    const pass = document.forms.register.pass.value
    const repass = document.forms.register.repass.value

    const newUser = new User(name,pass,repass)

    if(newUser.password !== newUser.repassword){
        let err = document.querySelector("label[for='repass']")
        err.innerHTML = "Passwords don't match!"
        err.style.color = "red"
        return
    }else if(name === "" || pass === "" || repass === ""){
        let err = document.querySelector("label[for='repass']")
        err.innerHTML = "There should not be empty fields "
        err.style.color = "red"
        return
    }

    users.push(newUser)
    saveUsers(users)
    alert('User registered!')
    form.style.visibility = 'hidden'

}

//logging in
let loginBtn = document.getElementsByClassName('login')[0]
let loginForm = document.getElementById('login')

function validateLogin(){
    let existing = JSON.parse(localStorage.getItem('users')) || [];
    let keys = existing.map(user => Object.values(user));
    return keys;
}


loginBtn.onclick = () => {
    loginForm.style.visibility = "visible"
}

let loginClose = document.getElementById('closeBtn')

loginClose.onclick = ($event) => {
    $event.preventDefault()
    loginForm.style.visibility = "hidden"
}

let login = document.getElementById('loginBtn')

login.onclick = ($event) =>{
    $event.preventDefault()
    const loginName = document.forms.login.loginName.value
    const loginPass = document.forms.login.logPass.value

    if(loginName === "" || loginPass === ""){
        let err = document.querySelector("label[for = 'loginName']")
        err.innerHTML = "The username or password is empty!"
        err.style.color = 'red'
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(user => user.username === loginName && user.password === loginPass);

    if (user) {
        loggedIn = true;
        alert('Login successful!');
        loginForm.style.visibility = 'hidden';
    } else {
        let err = document.querySelector("label[for='logPass']");
        err.innerHTML = "Invalid username or password!";
        err.style.color = "red";
    }

    loginBtn.innerHTML = `Logged in as ${user.username}`
}

