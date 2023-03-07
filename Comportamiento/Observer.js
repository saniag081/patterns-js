const user = new User();

const init = () => {
    user.on('login', userLoggedIn);
}

const userLoggedIn = () => {
    // ususario inicia sesion
}

app.init();

// en algulado de la app
const login = () => {
    // logica de inicio de sesion
    // ...

    // luego
    user.trigger('login')
}


login()