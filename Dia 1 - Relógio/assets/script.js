function adicionaNomes(nomes, ...nomesNovos){
    let nomesConjuntos = [
        ...nomes,
        ...nomesNovos
    ]
    return console.log(nomesConjuntos);
}

let nomes = ['Caio', 'Pedro'];
adicionaNomes(nomes, 'Katarina', 'Luiz');