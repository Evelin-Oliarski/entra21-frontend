const formulario = document.getElementById("meuForm");  
const nome = document.getElementById('nome');
const spanErro = document.getElementById("msg-erro");

//Aqui temos dois eventos trabalhando juntos:
//Evento 1 — o submit (valida ao enviar)

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  if(formulario.nome.value == ""){
    // campo vazio: adiciona erro
    formulario.nome.classList.add('borda-vermelha');
    spanErro.innerText = 'Campo obrigatório';
    console.log("erro")
  } else {
    // campo preenchido: remove erro
    formulario.nome.classList.remove('borda-vermelha');
    spanErro.innerText = '';
    console.log("certo!")
  }
});  

//Evento 2 — o input (limpa o erro enquanto digita)

nome.addEventListener('input', function() {

    if (nome.value !== '') {
      nome.classList.remove('borda-vermelha');
      spanErro.textContent = '';
    }
  
});




