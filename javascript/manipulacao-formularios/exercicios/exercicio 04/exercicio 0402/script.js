//Desafio: fazer com .onchange() o atributo meuFormulario
// const meuFormulario = document.getElementById('form')
//Dica: usar event.target

const meuFormulario = document.getElementById('form');

meuFormulario.onchange = function(event) {
  const botao = document.getElementById('botao');

  // event.target aponta para o campo que mudou dentro do form
  if (event.target.id === 'aceite') {
    botao.disabled = !event.target.checked;
  }
};