const countBtn = document.getElementById("count-btn");
const countResult = document.getElementById("count-result");

countBtn.addEventListener("click", () => {
  const textInput = document.getElementById("text");
  const text = textInput.value;
  const count = text.length;
  countResult.innerHTML = `El texto ingresado tiene ${count} caracteres.`;
});

const valueInput = document.getElementById('value');
const typeBtn = document.getElementById('type-btn');
const typeResult = document.getElementById('type-result');

typeBtn.addEventListener('click', () => {
  const value = valueInput.value.trim();
  let type;

  if (!isNaN(value) && value !== '') {
    type = 'numero';
  } else if (typeof value === 'string' || value instanceof String) {
    type = 'string';
  } else if (typeof value === 'boolean') {
    type = 'boolean';
  } else if (Array.isArray(value)) {
    type = 'array';
  } else if (typeof value === 'object' && value !== null) {
    type = 'object';
  } else {
    type = 'undefined or null';
  }

  typeResult.textContent = `El tipo de dato ingresado es: ${type}`;
});


const ageBtn = document.querySelector('#age-btn');
const ageResult = document.querySelector('#age-result');

ageBtn.addEventListener('click', () => {
  const name = document.querySelector('#name').value;
  const age = parseInt(document.querySelector('#age').value);

  if (isNaN(age)) {
    ageResult.textContent = 'Ingrese una edad válida';
  } else if (age >= 18) {
    ageResult.textContent = `${name} es mayor de edad (${age} años)`;
  } else {
    ageResult.textContent = `${name} es menor de edad (${age} años)`;
  }
});

const checkGradeBtn = document.getElementById('check-grade-btn');
checkGradeBtn.addEventListener('click', function() {
  const studentName = document.getElementById('student').value;
  const subjectName = document.getElementById('subject').value;
  const grade1 = parseFloat(document.getElementById('grade1').value);
  const grade2 = parseFloat(document.getElementById('grado2').value);
  const grade3 = parseFloat(document.getElementById('grade3').value);

  const average = (grade1 + grade2 + grade3) / 3;
  let result = '';

  if (average >= 3.0) {
    result = `<p>${studentName} ha aprobado la materia de ${subjectName} con un promedio de ${average.toFixed(2)}.</p>`;
    document.getElementById('resultado').style.color = 'green';
  } else {
    result = `<p>${studentName} ha reprobado la materia de ${subjectName} con un promedio de ${average.toFixed(2)}.</p>`;
    document.getElementById('resultado').style.color = 'red';
  }

  document.getElementById('resultado').innerHTML = result;
});


function identificarParImpar() {
  let numero = parseInt(document.getElementById("numero").value);
  if (isNaN(numero)) {
    document.getElementById("resultado").innerHTML = "Por favor ingrese un número válido";
  } else if (numero % 2 == 0) {
    document.getElementById("resultado").innerHTML = numero + " es un número par";
  } else {
    document.getElementById("resultado").innerHTML = numero + " es un número impar";
  }
}


function buscarTexto() {
  let texto = document.getElementById("texto").value;
  let busqueda = document.getElementById("busqueda").value;
  
  if (texto.includes(busqueda)) {
    document.getElementById("resultado").textContent = "El texto contiene la palabra buscada.";
  } else {
    document.getElementById("resultado").textContent = "El texto no contiene la palabra buscada.";
  }
}


function identificarDivisibilidad() {
  var num1 = parseInt(document.getElementById("numero1").value);
  var num2 = parseInt(document.getElementById("numero2").value);
  
  if (num1 % num2 === 0) {
    document.getElementById("resultado").innerHTML = num1 + " es divisible por " + num2;
  } else {
    document.getElementById("resultado").innerHTML = num1 + " no es divisible por " + num2;
  }
}


function identificarParesImpares() {
  var lista = document.getElementById("lista").value;
  var numeros = lista.split(",");
  var pares = [];
  var impares = [];
  
  for (var i = 0; i < numeros.length; i++) {
    var num = parseInt(numeros[i]);
    
    if (num % 2 === 0) {
      pares.push(num);
    } else {
      impares.push(num);
    }
  }
  
  var resultado = "Pares: " + pares.join(", ") + "<br>Impares: " + impares.join(", ");
  document.getElementById("resultado").innerHTML = resultado;
}
