frutas = ['uva', 'maça', 'pera', 'laranja', 'bergamota', 'mimosa']

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

    for (let i = frutas.length - 1; i >= 0; i-- ){
        console.log(frutas[i]);
    }

    for (let i = 0; i < frutas.length; i++){
        console.log("Cálculo dos índices: " + (frutas.length-1) + " _ _ _ " + i);
        console.log(frutas[frutas.length - 1 - i]);
    }
