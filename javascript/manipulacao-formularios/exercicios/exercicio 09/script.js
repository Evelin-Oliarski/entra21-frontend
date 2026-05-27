//classList.toggle -> Até agora usamos add e remove separadamente. 
//O toggle faz os dois automaticamente:

const botao = document.getElementById('btnTema');

botao.addEventListener('click', function(){
    document.getElementById("cardForm").classList.toggle("tema-escuro");
});