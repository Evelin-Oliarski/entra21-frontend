const form = document.getElementById('meu-formulario');

form.addEventListener('submit', function(evento) {
  evento.preventDefault(); // bloqueia o recarregamento
  alert('Formulário interceptado com sucesso!');
});