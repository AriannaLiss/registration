import { generateID } from "./functions.js";
import { addLoginEvents, addRegistrationEvents } from "./events.js";
import { getWarningMsg } from "./validation.js"
import { getCurrentUser, quit } from "./user.js";

export const createPage = (imgURL = "") => {
    const template = `
      <div class="container">
          <div class="img">
              <img src="${imgURL}" alt="registration form picture">
          </div>
          <div class="form"></div>
      </div>
      `;
    document.querySelector("body").insertAdjacentHTML("beforeend", template);
};

export const createWelcomeMsg = () => {
    const form = document.querySelector(".form");
    form.insertAdjacentHTML(
        "beforeend",
        `<h1>${getCurrentUser().name}, welcome! :)</h1>`);

    const exit = document.createElement('input');
    exit.type = 'button';
    exit.value = 'QUIT';
    exit.addEventListener('click', quit);
    form.appendChild(exit);
}

export const createLoginForm = () => {
    document.querySelector(".form").insertAdjacentHTML(
        "beforeend",
        `
          <form>
          <h1>Login</h1>
          ${createWarningMsg('noUser')}
          ${inputLabelHTML("email", "email")}
          ${inputLabelHTML("password", "password")}
          <p>Not a user? <a href='/registration.html'>Register now</a></p>
          <input type='button' id='login' value='LOGIN'>
          </form>`
    );
    addLoginEvents();
};

export const createRegistrationForm = () => {
    document.querySelector(".form").insertAdjacentHTML(
        "beforeend",
        `
            <form>
            <h1>Registration</h1>
            ${inputLabelHTML("Name",'name', 'name', true)}
            ${inputLabelHTML("Date Of Birth", "date")}
            ${inputLabelHTML(`Father's/Mother's Name`,undefined, 'parentsName')}
            ${inputLabelHTML("Email", "email",'email', true)}
            ${createWarningMsg('wrongEmail')}
            ${createWarningMsg('doubleEmail')}
            ${inputLabelHTML("Mobile No.", "tel",'tel')}
            ${inputLabelHTML("Password", "password", 'password', true)}
            ${createWarningMsg('wrongPass','wrongPass1')}
            ${inputLabelHTML("Re-enter Password", "password", "rePassword")}
            ${createWarningMsg('wrongPass','wrongPass2')}
            ${createWarningMsg('equalPass')}
            ${inputLabelHTML("Home Number", "number",'homeNumber')}
            <input type='button' id='registration' value='SUBMIT'/>
            </form>`
    );
    addRegistrationEvents();
};

const inputLabelHTML = (label = "", type = "text", id, required = false) => {
    if (!id) id = generateID(label);
    return `<label for="${id}">${label} ${putRequiredMark(required)}</label>
            <input type="${type}" id="${id}"
            ${putRequired(required,id)}`;
};

const putRequiredMark = (flag) => {
    return flag ? '*' : '';
}

const putRequired = (flag,id) => {
    return flag ? `required/>${createWarningMsg('required',id+'Req')}` : '/>';
}

const createWarningMsg = (msgID, divID = msgID) => {
    return `<p class="warning hide" id = "${divID}">${getWarningMsg(msgID)}</p>`;
}
