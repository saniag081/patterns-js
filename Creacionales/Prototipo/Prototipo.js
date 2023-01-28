const perro = {
  raza: 'kilterrier',
  ladrar: function() {
    console.log(`Guau!, soy un ${this.raza}`);
  },
}

const kiltro = Object.create(perro);

kiltro.ladrar();
console.log(kiltro);

kiltro.raza = 'super perro!';
kiltro.ladrar();
console.log(kiltro);