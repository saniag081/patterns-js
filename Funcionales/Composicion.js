// ---- Parte 1
// const users = [
//     { edad: 17, nombre: 'Nicolas', apellido: 'soto'},
//     { edad: 22, nombre: 'Loreto', apellido: 'soto'},
//     { edad: 30, nombre: 'Sofia', apellido: 'soto'},
//     { edad: 1, nombre: 'Chanchito', apellido: 'soto'},
// ]

// const traerPrimerInfante = (data) => {
//     const infantes = data.filter(x => x < 2);
//     const primerInfante =  infantes[0];
//     const infante = {
//         nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
//         edad: primerInfante.edad,
//     }

//     return `${infante.nombreCompleto} tiene ${infante.edad} años`;
// }


// ---- Parte 2
// const users = [
//     { edad: 17, nombre: 'Nicolas', apellido: 'soto'},
//     { edad: 22, nombre: 'Loreto', apellido: 'soto'},
//     { edad: 30, nombre: 'Sofia', apellido: 'soto'},
//     { edad: 1, nombre: 'Chanchito', apellido: 'soto'},
// ]

// const head = xs => xs[0];

// const formateo = x => ({
//    nombreCompleto: `${x.nombre} ${x.apellido}`,
//    edad: x.edad,
// });

// const formato = infante => `${infante.nombreCompleto} tiene ${infante.edad} años`;

// const traerPrimerInfante = (data) => {
//     // composicion de funciones
//     return formato(formateo(head(data.filter(x => x < 2))));
// }


// ---- Parte 3
const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'soto'},
    { edad: 22, nombre: 'Loreto', apellido: 'soto'},
    { edad: 30, nombre: 'Sofia', apellido: 'soto'},
    { edad: 1, nombre: 'Chanchito', apellido: 'soto'},
]

// file helpers
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const filter = f => xs => xs.filter(f);

const head = xs => xs[0];

const formateo = x => ({
   nombreCompleto: `${x.nombre} ${x.apellido}`,
   edad: x.edad,
});

const formato = infante => `${infante.nombreCompleto} tiene ${infante.edad} años`;

const traerPrimerInfante = compose(
    formato,
    formateo,
    head,
    filter(x => x.edad < 2)
);

// const traerPrimerInfante = pipe(
//     filter(x => x.edad < 2),
//     head,
//     formateo,
//     formato
// );