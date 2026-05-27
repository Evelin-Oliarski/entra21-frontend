const textarea = document.getElementById('mensagem');
const contador = document.getElementById('contador');

textarea.addEventListener('keyup', function(){

    //textarea.value.length — o .value pega o texto digitado, e o .length conta quantos caracteres ele tem. 
    //Subtraindo de 50, temos os restantes.

    const restantes = 50 - textarea.value.length;

    //textContent — usamos isso para trocar o texto dentro do <p>. 
    //É diferente do placeholder — aqui estamos mudando o conteúdo visível do parágrafo.

    contador.textContent = 'Caracteres restantes: ' + restantes;

    if (restantes === 0){
        contador.classList.add('limite-atingido');
    } else {
        contador.classList.remove('limite-atingido');
    }
});