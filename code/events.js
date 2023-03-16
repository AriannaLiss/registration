import { saveUserIfValid } from './functions.js';
import { isTagValid } from './validation.js'

export const addRegistrationEvents = () => {

    // ${inputHTML("Name")}
    // ${inputHTML("Date Of Birth", "date")}
    // ${inputHTML(`Father's/Mother's Name`)}
    // ${inputHTML("Email", "email")}
    // ${inputHTML("Mobile No.", "tel")}
    // ${inputHTML("Password", "password")}
    // ${inputHTML("Re-enter Password", "password", "rePassword")}
    // ${inputHTML("Home Number", "number")}
    
    const pass1 = document.querySelector('#password');
    pass1.addEventListener("change", (e) => {
        isTagValid('password', e.target);
    });

    const pass2 = document.querySelector('#rePassword');
    pass2.addEventListener("change", (e) => {
        isTagValid('password', e.target);
    });

    document.querySelector('#registration').addEventListener("click", saveUserIfValid);
    
}
