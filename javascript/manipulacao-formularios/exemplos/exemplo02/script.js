const form = document.getElementById('meuForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let linguagem = form.linguagem.value

    console.log(linguagem)
})

const radios = document.getElementsByName('linguagem');

radios.forEach(
    function(radio) {

        radio.addEventListener('change', function(event) {

            if (radio.value == 'javascript') {
                console.log("linguagem pouco maneira")
            } else if (radio.value == "python") {
                console.log("Linguagem terrivel")
            } else {
                console.log('Melhor linguagem de todas')
            }

        })

    }
);