const form = document.getElementById('meu-formulario');

// primeiro parâmetro um tipo, segundo parâmetro uma função
form.addEventListener('submit', function(evento) {
  evento.preventDefault(); // bloqueia o recarregamento
  alert('Formulário interceptado com sucesso!');
});