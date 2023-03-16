const user = {
    name: '',
    dateOfBirth: '',
    parentsName: '',
    email: '',
    tel: '',
    password: '',
    homeNumber: undefined
}

export const saveUser = () => {
    for (const [key, value] of Object.entries(user)) {
        user[key] = document.getElementById(key).value;
      }
    if (!localStorage.users) localStorage.users = [];
    const users = JSON.parse(localStorage.users);
    users.push(user);
    localStorage.users = JSON.stringify(users);
    console.log(users);
}
