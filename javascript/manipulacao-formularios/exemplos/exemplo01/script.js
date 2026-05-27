const form = document.getElementById('meuForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let login = form.login.value;
    let senha = form.senha.value;

    console.log(login, senha)

    form.reset()
})

// Maneira antiga

function fazerLogin() {
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    console.log(login, senha)

    login.value = ""
    senha.value = ""
}