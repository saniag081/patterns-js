class Miclass {
  constructor(p1, p2) {
    this.propiedad1 = p1;
    this.propiedad2 = p2;
  }

  metodo() {
    // soy un metodo de prototipo
  }
};
  
  const instancia = new Miclass(1, 4);
  console.log(instancia);
  
  