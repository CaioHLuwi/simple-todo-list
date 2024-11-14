const inputAdicionar = document.querySelector('#adicionaItem');
const inputRemover = document.querySelector('#apagarItem');

function adicionaItem(e){
    let valorInputAdicionar = inputAdicionar.value;
    const liElement = document.createElement('li');
    const ulLista = document.querySelector('#lista');

    if(e.key === 'Enter'){
        liElement.innerText = valorInputAdicionar;
        liElement.classList.add('item_lista');
        ulLista.append(liElement);

        inputAdicionar.value = '';
    }
}

function apagaItem(e){
    const itensLista = document.querySelectorAll('.item_lista');
    let valorInputRemover = inputRemover.value;

    if(e.key === 'Enter'){
        for(i = 0; i < itensLista.length; i++){
            if(valorInputRemover === itensLista[i].innerHTML){
                itensLista[i].remove();

            }
        }

        inputRemover.value = '';
    }
}

inputAdicionar.addEventListener('keyup', adicionaItem);

inputRemover.addEventListener('keyup', apagaItem);