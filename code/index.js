import {createPage, createLoginForm, createRegistrationForm, createWelcomeMsg} from "./constructor.js"
import { getCurrentUser } from "./user.js";

if ((!getCurrentUser()) &&
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

if (getCurrentUser()){
    createPage('../img/girl.svg');
    createWelcomeMsg();
}
