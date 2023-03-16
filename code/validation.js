const regex = {
    password: /^[A-Za-z\d.-_]{8,}$/
}

const warningMsg = {
    equalPass: 'Passwords must be equal',
    wrongPass: 'Password could contain letters, digits, dot, dush, underdush and contian 8 or more symbols.'
}

export const getWarningMsg = (id) => {
    return warningMsg[id];
}

export const isFormValid = () => {
    const flag = true;
    if (!isEqual(
        document.querySelector("#password"),
        document.querySelector("#rePassword")
    )) flag = false;
    return flag;
};

const isEqual = (tag1, tag2) => {
    const flag = tag1.value && tag2.value && tag1.value === tag2.value;
    if (!flag) {
        console.log(`${tag1.value} <> ${tag2.value}`);
        showWarningMsg('equalPass');
    } else {
        console.log(`${tag1.value} == ${tag2.value}`);
        hideWarningMsg('equalPass');
    }
    console.log(flag);
    return flag;
};

export const isTagValid = (type, tag) => {
    const flag = isValid(regex[type], tag.value);
    flag ? tag.classList.remove("error") : tag.classList.add("error");
    return flag;
};

const isValid = (r, v) => r.test(v);


const showWarningMsg = (id) => {
    document.getElementById(id).classList.remove('hide');
}

const hideWarningMsg = (id) => {
    document.getElementById(id).classList.add('hide');
}
