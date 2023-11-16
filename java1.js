const numeros = [-3,-2,-1,0,1,2,3]

function PosiNega(lista) {
    let Positivos = [];
    let Negativos = [];
    for (var i = 0; i < lista.lenght; i++){
        if (lista[1] >0){
        Positivos.push(lista[i])
        }
        else if (lista[i] < 0){
        Negativos.push(lista[i])
        }
    }
    return (Positivos, Negativos);
}

console.log(PosiNega(numeros))