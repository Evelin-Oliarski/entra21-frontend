const formulario = document.getElementById('form');

formulario.addEventListener('keyup', function(event){
    event.preventDefault();

    let senha = document.getElementById('senha');
    let senhaConfirmada = document.getElementById('confirmarSenha');

    if(senha.value === senhaConfirmada.value){
        senhaConfirmada.classList.add('senha-ok');
        senhaConfirmada.classList.remove('senha-erro');
    } else {
        senhaConfirmada.classList.add('senha-erro');
        senhaConfirmada.classList.remove('senha-ok');
    }
});