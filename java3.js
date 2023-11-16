const endereço = {
    rua: "Travessa da esquina",
    numero: 22,
    bairro: "pantanal",
    cidade: "Picos",
    ref: "próximo ao IFPI",
}

function texto(obj){
    return "o usuario mora em " + obj.cidade + ", no bairro " + obj.bairro + ", " + obj.ref
}
console.log(texto(endereço))