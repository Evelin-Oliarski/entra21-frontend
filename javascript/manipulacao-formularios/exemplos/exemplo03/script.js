const form = document.getElementById('meuForm');

let inputConfirmarSenha = document.getElementById('confirmarSenha')

inputConfirmarSenha.addEventListener('keyup', function(event) {
    let senha = document.getElementById('senha').value;
    let confirmaSenha = inputConfirmarSenha.value;
    let botao = document.getElementById('botao')
    
    if (senha === confirmaSenha) {
        //Habilita botão
        botao.disabled = false
        inputConfirmarSenha.classList.remove('erro')
        inputConfirmarSenha.classList.add('acerto')
        //Borda verde
    } else {
        botao.disabled = true
        //Desabilita botão
        //Borda vermelho
        inputConfirmarSenha.classList.add('erro')
        inputConfirmarSenha.classList.remove('acerto')
    }
})