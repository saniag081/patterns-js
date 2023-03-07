const Commander = (() => {
    const acciones = {
        comprar: x => console.log(`Comprando ${x}`),
        vender: x => console.log(`Vendido ${x}`),
    }

    return {
        run: (comando, argunmentos) => {
            if (!acciones[comando]) {
                console.log('comando no existe');
                return 'no existe';
            }
            acciones[comando](argunmentos)
        }
    }
}) ()

Commander.run('comprar', 'Mazda');
Commander.run('lala', 'no pasa nada');
