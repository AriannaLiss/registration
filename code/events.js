import { withRequiredInputs } from './functions.js';
import { saveUserIfValid, login } from './user.js';
import { isTagValid, showWarningMsg, hideWarningMsg, validateUser } from './validation.js'

export const addRegistrationEvents = () => {

    // ${inputHTML("Name")}
    // ${inputHTML("Date Of Birth", "date")}
    // ${inputHTML(`Father's/Mother's Name`)}
    // ${inputHTML("Email", "email")}
    // ${inputHTML("Mobile No.", "tel")}
    // ${inputHTML("Password", "password")}
    // ${inputHTML("Re-enter Password", "password", "rePassword")}
    // ${inputHTML("Home Number", "number")}
    
    withRequiredInputs((input) => {
        input.addEventListener('change',(e)=>
        {
            !e.target.value
                ? showWarningMsg(e.target.id+'Req')
                : hideWarningMsg(e.target.id+'Req');
        })
    });

    document.querySelector('#email').addEventListener('change', (e) =>{
        isTagValid('email', e.target)
            ? hideWarningMsg('wrongEmail')
            : showWarningMsg('wrongEmail');
    })

    const pass1 = document.querySelector('#password');
    pass1.addEventListener("change", (e) => {
        isTagValid('password', e.target)
            ? hideWarningMsg('wrongPass1')
            : showWarningMsg('wrongPass1');
    });

    const pass2 = document.querySelector('#rePassword');
    pass2.addEventListener("change", (e) => {
        isTagValid('password', e.target)
            ? hideWarningMsg('wrongPass2')
            : showWarningMsg('wrongPass2');
    });

    document.querySelector('#registration').addEventListener("click", saveUserIfValid);
    
}

export const addLoginEvents = () => {
    document.querySelector("#login").addEventListener('click', () => {
        const user = validateUser();
        if (user){
            alert(`${user.name} welcome! :)`);
            login(user);
            document.location = '/';
        }
    })
}
