const numeros = [1,2,3,4,5,6,7,8,9]

function paresImpares(lista) {
    let pares = [];
    let impares = [];
    for (var i = 0; i < lista.lenght; i++){
        if (lista[1] % 2 == 0 ){
        console.log('Numero par' + lista[i]);
        pares.push(lista[i])
        }
        else {
        console.log('Numero impar:' + lista[1]);
        impares.push(lista[i])
        }
    }
    return (pares, impares);
}

console.log(paresImpares(numeros))