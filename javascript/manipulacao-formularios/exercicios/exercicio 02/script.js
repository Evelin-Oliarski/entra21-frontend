const formulario = document.getElementById("meuForm");

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  let spanErro = document.getElementById("msg-erro");

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


