class Suma {
    constructor(num = 0) {
        this.val =  num;
    }
    sumar(num) {
        this.val += num;
        return this;
    }
}

const valor =  new Suma(1);

console.log(valor
    .sumar(1)
    .sumar(2)
    .sumar(3)
    .sumar(4)
    .val);