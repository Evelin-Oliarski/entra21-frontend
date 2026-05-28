async function buscarIdade() {
    const url = 'https://api.agify.io/?name='
    
    try {
        const resposta = await fetch(url + 'Evelin');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.error(erro);
    }
}

buscarIdade();