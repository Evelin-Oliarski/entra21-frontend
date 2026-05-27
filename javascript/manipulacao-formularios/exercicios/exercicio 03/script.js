const formulario = document.getElementById("form");

const mensagem = document.getElementById('erro');

formulario.addEventListener('submit', function(event){
    event.preventDefault(); //Impede a página de recarregar.

    //pegar o valor do campo email
    const input = document.getElementById('email');
    const valor = input.value;

    //validar se contém @ e .
    const ehValido = valor.includes('@') && valor.includes('.');

    //O classList.add e classList.remove garantem que 
    //as duas classes nunca fiquem ativas ao mesmo tempo.
    if(ehValido) {
        input.classList.add('input-valido');
        input.classList.remove('input-invalido');
        mensagem.textContent = '';
    } else {
        input.classList.add('input-invalido');
        input.classList.remove('input-valido');
        mensagem.textContent = 'E-mail inválido!'
    }
});