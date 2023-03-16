import {createPage, createLoginForm, createRegistrationForm} from "./constructor.js"

if ((!localStorage.isLogin) &&
    !(document.location.pathname.includes('/login.html') ||
    document.location.pathname.includes('/registration.html')))
    document.location = '/login.html';
    
if (document.location.pathname.includes('/login.html')){
    createPage('../img/girl.svg');
    createLoginForm();
}  

if (document.location.pathname.includes('/registration.html')){
    createPage('../img/boy.svg');
    createRegistrationForm();
}
