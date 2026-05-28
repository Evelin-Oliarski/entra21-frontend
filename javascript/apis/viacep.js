const form = document.getElementById('form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    buscarEndereço(form.cep.value);
});

// Importante: quem faz a requisição HTTP para a API no JS é o método fetch(url)

async function buscarEndereço(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const resposta = await fetch(url, {method: 'GET'});
        const dados = await resposta.json();
        console.log('Bairro', dados.bairro);
        console.log('Cidade', dados.localidade);
    } catch (erro) {
        console.error('Falha na comunicação', erro);
    }
}