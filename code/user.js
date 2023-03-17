import { hideWarningMsg, showWarningMsg, checkForm } from "./validation.js";

const user = {
    name: '',
    dateOfBirth: '',
    parentsName: '',
    email: '',
    tel: '',
    password: '',
    homeNumber: undefined
}

const saveUser = () => {
    for (const [key, value] of Object.entries(user)) {
        user[key] = document.getElementById(key).value;
    }
    const users = localStorage.users ? JSON.parse(localStorage.users) : [];
    if (getUser(user.email)) {
        showWarningMsg('doubleEmail');
    } else {
        hideWarningMsg('doubleEmail'),
        users.push(user);
        alert(`User ${user.name} has been successfuly saved!`);
        document.location = '/login.html'
    }
    localStorage.users = JSON.stringify(users);
    console.log(users);
}

export const saveUserIfValid = () => {
    if (checkForm()) {
        saveUser();
    } else {
        console.error('form is not valid!')
    }
}

export const login = (user) => {
    localStorage.currentUser = JSON.stringify(user);
}

export const quit = () => {
    localStorage.removeItem('currentUser');
    document.location='/login.html';
}

export const getUser = (userEmail) => {
    const users = localStorage.users ? JSON.parse(localStorage.users) : [];
    let user;
    users ? user = users.find(({email}) => email.toLowerCase() === userEmail.toLowerCase())
        : console.error('No any users in DB.');
    return user;
}

export const getCurrentUser = () => {
    const user = localStorage.currentUser;
    user ? console.dir(user) : console.error('No any info about current user.')
    return user ? JSON.parse(user) : undefined;
}
