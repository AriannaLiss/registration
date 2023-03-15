export const createPage = (imgURL='') => {
    const template = `
    <div class="container">
        <div class="img">
            <img src="${imgURL}" alt="registration form picture">
        </div>
        <div class="form">

        </div>
    </div>
    `
    document.querySelector('body').insertAdjacentHTML('beforeend',template);
}

export const createLoginForm = () => {
    document.querySelector('.form').insertAdjacentHTML('beforeend',`
        <form>
        <h1>Login</h1>
        ${createInput('email','email')}
        ${createInput('password','password')}
        <p>Not a user? <a href='/registration.html'>Register now</a></p>
        <input type='button' id='login' value='LOGIN'>
        </form>`);
}

export const createRegistrationForm = () => {
    document.querySelector('.form').insertAdjacentHTML('beforeend',`
        <form>
        <h1>Registration</h1>
        ${createInput('Name')}
        ${createInput('Date Of Birth', 'date')}
        ${createInput( `Father's/Mother's Name`)}
        ${createInput( 'Email', 'email' )}
        ${createInput( 'Mobile No.', 'tel')}
        ${createInput('Password','password')}
        ${createInput('Re-enter Password','password', 'rePassword')}
        ${createInput( 'Home Number', 'number' )}
        <input type='submit' id='registration' value='SUBMIT'>
        </form>`);
}

const createInput = (label = '', type = 'type', id) => {
    if (!id) id = generateID(label);
    return `<label for="${id}">${label}</label>
            <input type="${type}" id="${id}"></input>`
}

const generateID = (label) => {
    let id = deleteExtras(label);
    id = id[0].toLowerCase() + id.slice(1);
    console.log('label is ' + label + ', id is ' + id);
    return id;
}

const deleteExtras = (id) => {
    const extras = /[ .,\/\\'-]/g;
    return id.replace(extras,'');
}
