let input_pizza_quantidade = document.getElementById('quantidade').value = 0
let btnSomaPizza = document.getElementById('btnSoma')
let btnSubPizza = document.getElementById('btnSub')
let btnEnviaCep = document.getElementById('btnPronto')



let tipoFina = document.getElementById('fina')
let tipoGrossa = document.getElementById('grossa')

let tamGrande = document.getElementById('grande')
let tamMedio = document.getElementById('media')
let tamPequeno = document.getElementById('pequena')

let pizzaDividida = document.getElementById('dividida')
let pizzaInteira = document.getElementById('inteira')

let valorTotal = document.getElementById('valor_total')

tipoFina.addEventListener('click', e => {
  const valTipoFina = 2

  tamGrande.addEventListener('click', e => {
    const valTamanhoGrande = 15
    let total = valTipoFina + valTamanhoGrande
    valorTotal.innerHTML = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  })
})

btnSomaPizza.addEventListener('click', e => {
  input_pizza_quantidade.value = document.getElementById('quantidade').value++
})

btnSubPizza.addEventListener('click', e => {
  input_pizza_quantidade.value = document.getElementById('quantidade').value--

  input_pizza_quantidade.value = document.getElementById('quantidade').value < 0 ?
    input_pizza_quantidade.value = document.getElementById('quantidade').value = 0 :
    input_pizza_quantidade.value = document.getElementById('quantidade').value = value - 1
})


/*pizzaInteira.addEventListener('click', e => {

})
})
tamMedio.addEventListener('click', e => {

})
tamPequeno.addEventListener('click', e => {

})
})

tipoGrossa.addEventListener('click', e => {
//nextFunc()
})
}
btnSomaPizza.addEventListener('click', e => {
input_pizza_quantidade.value = document.getElementById('quantidade').value++
})

btnSubPizza.addEventListener('click', e => {
input_pizza_quantidade.value = document.getElementById('quantidade').value--

input_pizza_quantidade.value = document.getElementById('quantidade').value < 0 ?
input_pizza_quantidade.value = document.getElementById('quantidade').value = 0 :
input_pizza_quantidade.value = document.getElementById('quantidade').value = value - 1
})*/


btnEnviaCep.addEventListener('click', e => {
  let inputNumero = document.getElementById('numero').value
  let cepValor = document.getElementById('cep').value
  const url = `https://viacep.com.br/ws/${cepValor}/json/`
  if (cepValor && inputNumero != '') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        e.preventDefault()
        cepValor = document.getElementById('cep').value = data.cep
        const rua = document.getElementById('rua').value = data.logradouro
        const bairro = document.getElementById('bairro').value = data.bairro
      })
  } else {
    window.alert('Informe o Nº e o CEP')
  }
})

var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);