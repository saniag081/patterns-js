const f = (ruta, cb) => {
    const resultados = computaciónPesada();
    cb(resultados);
};

const manejaResultado  = (resultado) => {

};

f('/users', manejaResultado);