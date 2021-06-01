let input_pizza_quantidade = document.getElementById('quantidade').value = 0
let btnSomaPizza = document.getElementById('btnSoma')
let btnSubPizza = document.getElementById('btnSub')


btnSomaPizza.addEventListener('click', e => {
  input_pizza_quantidade.value = document.getElementById('quantidade').value++
})

btnSubPizza.addEventListener('click', e => {
  input_pizza_quantidade.value = document.getElementById('quantidade').value--

  input_pizza_quantidade.value = document.getElementById('quantidade').value < 0 ?
    input_pizza_quantidade.value = document.getElementById('quantidade').value = 0 :
    input_pizza_quantidade.value = document.getElementById('quantidade').value = value - 1
})

fetch('https://viacep.com.br/ws/06226002/json/')
.then(res => res.json())
.then(data => {
  console.log(data)
  const cep = document.getElementById('cep').value = data.cep
  const rua = document.getElementById('rua').value = data.logradouro
  const bairro = document.getElementById('bairro').value = data.bairro
})

var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

