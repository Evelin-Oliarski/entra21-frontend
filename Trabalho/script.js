const form = document.getElementById('form');
const tamanhoTexto = document.getElementById('tamanhoTexto');
const spanErro = document.getElementById('mensagemErro');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const numeroValido = validarNumeroTexto();

    if(numeroValido){
        buscarFato();
    }
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

function validarNumeroTexto(){
    if(tamanhoTexto.value < 20){
        tamanhoTexto.classList.add('borda-vermelha');
        spanErro.textContent = 'O texto tem que ter no mínimo 20 espaçamentos.';
        return false;
    } else if(tamanhoTexto.value > 250){
        tamanhoTexto.classList.remove('borda-vermelha');
        spanErro.textContent = 'O texto tem que ter no máximo 250 espaçamentos.';
        return false;
    } else {
        tamanhoTexto.classList.remove('borda-vermelha');
        spanErro.textContent = '';
        return true;
    }
}

tamanhoTexto.addEventListener('input', function(){
    if(tamanhoTexto !== ''){
        tamanhoTexto.classList.remove('borda-vermelha');
        spanErro.textContent = '';
    }
});

