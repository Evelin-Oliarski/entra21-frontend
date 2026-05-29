const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    buscarFato();
});

async function buscarFato() {

    let tamanhoTexto = document.getElementById('tamanhoTexto').value;
    
    const url = 'https://catfact.ninja/fact?max_length=' + tamanhoTexto;
    
    try {
        const resposta = await fetch(url, {method: 'GET'});
        const dados = await resposta.json();
        console.log('Fato: ', dados.fact);
        console.log('Tamanho do Texto: ', dados.length);
    } catch (error) {
        console.error('Falha na comunicação!', error);
    }
}
