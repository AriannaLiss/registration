import { getUser } from "./user.js";

const regex = {
    email: /^[\d\w]{3,}@[\d\w]+\.[\d\w\.]*[\w]$/i,
    password: /^[A-Za-z\d.-_]{8,}$/
}

const warningMsg = {
    wrongEmail: 'Please, input correct email',
    doubleEmail: 'User with such email already exists',
    noUser: 'Email or password are not correct',
    equalPass: 'Passwords must be equal',
    wrongPass: 'Password could contain letters, digits, dot, dush, underdush and have length 8 or more symbols.',
    required: 'This field is required'
}

export const getWarningMsg = (id) => {
    return warningMsg[id];
}

export const checkForm = () => {
    let flag = true;
    const pass = document.querySelector("#password");

    if (!checkRequiredInputs()
        || !isTagValid('email',document.querySelector("#email"))
        || !isTagValid('password',pass)
        || !isEqualTags(pass, document.querySelector("#rePassword")))
        flag = false;
    return flag;
};

const isEqual = (val1, val2) => {
    return val1 && val2 && val1 === val2;
}

const isEqualTags = (tag1, tag2) => {
    const flag = isEqual(tag1.value, tag2.value);
    flag ? hideWarningMsg('equalPass')
         : showWarningMsg('equalPass');
    return flag;
};

export const isTagValid = (type, tag) => {
    const flag = isValid(regex[type], tag.value);
    flag ? tag.classList.remove("error") : tag.classList.add("error");
    return flag;
};

const isValid = (r, v) => r.test(v);


export const showWarningMsg = (id) => {
    document.getElementById(id).classList.remove('hide');
}

export const hideWarningMsg = (id) => {
    document.getElementById(id).classList.add('hide');
}

const checkRequiredInputs = () =>{
    const inputs = document.querySelectorAll('form input');
    let flag = true;
    inputs.forEach((input) => {
        if (input.required){
            if(input.value) {
                hideWarningMsg(input.id+'Req')
            } else {
                flag=false;
                showWarningMsg(input.id+'Req');
            }
        }
    })
    return flag;
}

export const validateUser = () => {
    const user = getUser(document.querySelector('#email').value);
    const flag = user && isEqual(user.password, document.querySelector('#password').value)
    flag ? hideWarningMsg('noUser')
        : showWarningMsg('noUser');
    return  flag ? user : undefined;
}
