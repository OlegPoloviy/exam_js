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

function getUsers (){
    let registered = JSON.parse(localStorage.getItem('users'))
    return registered
}
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
    }

    users.push(newUser)
    saveUsers(users)
    alert('User registered!')
}

