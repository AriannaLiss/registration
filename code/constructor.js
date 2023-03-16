import { generateID } from "./functions.js";
import { addRegistrationEvents } from "./events.js";
import { getWarningMsg } from "./validation.js"

export const createPage = (imgURL = "") => {
    const template = `
      <div class="container">
          <div class="img">
              <img src="${imgURL}" alt="registration form picture">
          </div>
          <div class="form">
  
          </div>
      </div>
      `;
    document.querySelector("body").insertAdjacentHTML("beforeend", template);
};

export const createLoginForm = () => {
    document.querySelector(".form").insertAdjacentHTML(
        "beforeend",
        `
          <form>
          <h1>Login</h1>
          ${inputLabelHTML("email", "email")}
          ${inputLabelHTML("password", "password")}
          <p>Not a user? <a href='/registration.html'>Register now</a></p>
          <input type='button' id='login' value='LOGIN'>
          </form>`
    );
};

export const createRegistrationForm = () => {
    document.querySelector(".form").insertAdjacentHTML(
        "beforeend",
        `
          <form>
          <h1>Registration</h1>
          ${inputLabelHTML("Name")}
          ${inputLabelHTML("Date Of Birth", "date")}
          ${inputLabelHTML(`Father's/Mother's Name`,undefined, 'parentsName')}
          ${inputLabelHTML("Email", "email")}
          ${inputLabelHTML("Mobile No.", "tel",'tel')}
          ${inputLabelHTML("Password", "password")}
          ${inputLabelHTML("Re-enter Password", "password", "rePassword")}
          ${createWarningMsg('wrongPass')}
          ${createWarningMsg('equalPass')}
          ${inputLabelHTML("Home Number", "number",'homeNumber')}
          <input type='button' id='registration' value='SUBMIT'>
          </form>`
    );
    addRegistrationEvents();
};

const inputLabelHTML = (label = "", type = "type", id) => {
    if (!id) id = generateID(label);
    return `<label for="${id}">${label}</label>
              <input type="${type}" id="${id}"></input>`;
};

const createWarningMsg = (id) => {
    return `<p class="warning hide" id = ${id}>${getWarningMsg(id)}</p>`;
}
