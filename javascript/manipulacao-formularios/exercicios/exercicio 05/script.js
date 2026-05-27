//O querySelectorAll retorna todos os radio buttons do grupo de uma vez, numa lista. 
//É diferente do getElementById que pega apenas um elemento.

const radios = document.querySelectorAll('input[name="tipo"]');

const documento = document.getElementById('documento');

//O forEach percorre cada radio da lista e coloca um listener em cada um. 
//Toda vez que qualquer um deles mudar, a função é chamada.

radios.forEach(function(radio) {
    radio.addEventListener('change', function() {

        if(radio.value === 'juridica') {

            //documento.disabled = true — isso desabilita o campo, impedindo o usuário de digitar nele.

            documento.disabled = true;
            documento.classList.add('fundo-cinza');

            //documento.placeholder — o placeholder é só o texto cinza de dica dentro do input. 
            //Podemos trocar ele a qualquer momento pelo JavaScript.

            documento.placeholder = 'CNPJ(não implementado)';
            
        } else {
            documento.disabled = false;
            documento.classList.remove('fundo-cinza')
            documento.placeholder = 'CPF';
        }
    });
});