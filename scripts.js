let input_pizza_quantidade = document.getElementById('quantidade').value = 0
let btnSomaPizza = document.getElementById('btnSoma')
let btnSubPizza = document.getElementById('btnSub')
let btnEnviaCep = document.getElementById('btnPronto')

let massaFina = document.getElementById('fina')
let massaGrossa = document.getElementById('grossa')

let pizzaGrande = document.getElementById('grande')
let pizzaMedia = document.getElementById('media')
let pizzaPequena = document.getElementById('pequena')

let pizzaDividida = document.getElementById('dividida')
let pizzaInteira = document.getElementById('inteira')

let valorTotal = document.getElementById('valor_total')

massaFina.addEventListener('click', tipoFina)
massaGrossa.addEventListener('click', tipoGrossa)
pizzaGrande.addEventListener('click', tamanhoGrande)
pizzaInteira.addEventListener('click', divisaoInteira)

var total, valTipo, valTamanho, valPizzaDivisao

btnSomaPizza.addEventListener('click', e => {
  input_pizza_quantidade.value = document.getElementById('quantidade').value++
})

btnSubPizza.addEventListener('click', e => {
  input_pizza_quantidade.value = document.getElementById('quantidade').value--

  input_pizza_quantidade.value = document.getElementById('quantidade').value < 0 ?
    input_pizza_quantidade.value = document.getElementById('quantidade').value = 0 :
    input_pizza_quantidade.value = document.getElementById('quantidade').value = value - 1
})

function tipoFina() {
  valTipo = 2
  total = valTipo
  valorTotal.innerHTML = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function tipoGrossa() {
  valTipo = 3
  total = valTipo
  valorTotal.innerHTML = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function tamanhoGrande() {
  valTamanho = 15
  total = valTipo + valTamanho
  valorTotal.innerHTML = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function divisaoInteira() {
  valPizzaDivisao = 30
  let pizzaQuantidadeTotal = input_pizza_quantidade.value = document.getElementById('quantidade').value
  total = (valTipo + valTamanho + valPizzaDivisao) * pizzaQuantidadeTotal
  valorTotal.innerHTML = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

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