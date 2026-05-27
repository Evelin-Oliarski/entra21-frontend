const formulario = document.getElementById('formulario');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

function validarNome() {
    if (nome.value === '') {
      nome.classList.add('borda-vermelha');
      erroNome.textContent = 'O nome é obrigatório!';
      return false;
    }
    nome.classList.remove('borda-vermelha');
    erroNome.textContent = '';
    return true;
}
  
function validarEmail() {
    if (!email.value.includes('@') || !email.value.includes('.')) {
      email.classList.add('borda-vermelha');
      erroEmail.textContent = 'Digite um e-mail válido!';
      return false;
    }
    email.classList.remove('borda-vermelha');
    erroEmail.textContent = '';
    return true;
}
  
function validarSenha() {
    if (senha.value.length < 6) {
      senha.classList.add('borda-vermelha');
      erroSenha.textContent = 'A senha deve ter no mínimo 6 caracteres!';
      return false;
    }
    senha.classList.remove('borda-vermelha');
    erroSenha.textContent = '';
    return true;
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
  
    if (nomeValido && emailValido && senhaValida) {
      alert('Cadastro realizado!');
      formulario.reset();
      nome.classList.remove('borda-vermelha');
      email.classList.remove('borda-vermelha');
      senha.classList.remove('borda-vermelha');
    }
});

nome.addEventListener('input', function() {
    if (nome.value !== '') {
      nome.classList.remove('borda-vermelha');
      erroNome.textContent = '';
    }
});
  
email.addEventListener('input', function() {
    if (email.value !== '') {
      email.classList.remove('borda-vermelha');
      erroEmail.textContent = '';
    }
});
  
senha.addEventListener('input', function() {
    if (senha.value !== '') {
      senha.classList.remove('borda-vermelha');
      erroSenha.textContent = '';
    }
});