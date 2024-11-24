const botao = document.querySelector('#botao');
const botaoPost = document.querySelector('#botaoPost');

async function getRequest(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`O conteúdo do request é ${json[1].title}`);
    alert('Clicou')
}

async function postRequest(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                title: 'Título do post',
                body: 'Aqui tem informações do novo post',
                userId: 5
            })
        }
    );
    let json = await response.json();

    console.log(json);
}

botao.addEventListener('click', getRequest);
botaoPost.addEventListener('click', postRequest);