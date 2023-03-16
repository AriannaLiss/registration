import { saveUser } from "./user.js";
import { isFormValid } from "./validation.js";

export const generateID = (label) => {
    let id = deleteExtras(label);
    id = id[0].toLowerCase() + id.slice(1);
    console.log("label is " + label + ", id is " + id);
    return id;
};

const deleteExtras = (id) => {
    const extras = /[ .,\/\\'-]/g;
    return id.replace(extras, "");
};

export const saveUserIfValid = () => {
    if (isFormValid()) {
        saveUser();
    } else {
        console.error('form is not valid!')
    }
}
