const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const texto = document.querySelector('#texto').value;
  const cantidad = texto.length;
  resultado.innerHTML = `El texto ingresado contiene ${cantidad} caracteres.`;
});
