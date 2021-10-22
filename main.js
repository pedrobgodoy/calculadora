function init() {
  const butoes = document.querySelectorAll('.btn');
  
  butoes.forEach(butao => butao.addEventListener('click', event => {
    adicionarNumero(event.target.value);
  }));
}

function adicionarNumero(valor) {
  const display = document.getElementById('display');
  display.value += `${valor}`;
}

function calcular() {
  const valorFinal = eval(display.value);
  atualizarResultado(valorFinal);
  atualizarDisplay(valorFinal);
}

function limpar() {
  atualizarDisplay('');
  atualizarDisplay('');
}

function atualizarDisplay(valor) {
  const display = document.getElementById('display');
  display.value = valor;
}

function atualizarResultado(valor) {
  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.value = valor;
}