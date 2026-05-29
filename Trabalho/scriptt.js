async function buscarFatos() {
    const url = 'https://catfact.ninja/facts?'
    
    try {
        const resposta = await fetch(url + 'max_length=' + '100' + '&limit=' + '2');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.error(erro);
    }
}

buscarFatos();

