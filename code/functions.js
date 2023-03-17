export const generateID = (label) => {
    let id = deleteExtras(label);
    id = id[0].toLowerCase() + id.slice(1);
    return id;
};

const deleteExtras = (id) => {
    const extras = /[ .,\/\\'-]/g;
    return id.replace(extras, "");
};

export const withRequiredInputs = (callback) =>{
    const inputs = document.querySelectorAll('form input[required]');
    inputs.forEach((input) => callback(input)
    )
}
