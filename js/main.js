// aquí va el código
let btnAdd = document.getElementById('btnAdd');
let inputName = document.getElementById('Name');
let inputNumber = document.getElementById('Number');
let contadorProd = document.getElementById('contadorProd');
let prodTotal = document.getElementById('prodTotal');
let precioTotal = document.getElementById('precioTotal');
let alertValidaciones = document.getElementById('alertValidaciones');
let alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
let alertValidacionesTexto2 = document.getElementById(
  'alertValidacionesTexto2'
);
let table = document.getElementById('elementTable');
let tableBody = document.getElementsByTagName('tbody');
let contador = 0;
let totalEnProductos = 0;
alertValidaciones.style.display = 'none';

function getPrice() {
  let random = Math.random() * 50;
  return Math.round(random * 100) / 100;
}
function validName() {
  return inputName.value.length >= 2 ? true : false;
}
function validCant() {
  if (
    inputNumber.value.length == 0 ||
    isNaN(inputNumber.value) ||
    parseFloat(inputNumber.value) <= 0
  ) {
    return false;
  } else {
    return true;
  }
}

btnAdd.addEventListener('click', function (e) {
  console.log(validName(), validCant());
  let isValidName = validName();
  let isValidNum = validCant();

  if (!isValidName) {
    alertValidaciones.style.display = 'block';
    alertValidacionesTexto.textContent = 'El nombre del producto no es válido.';
    inputName.style.border = 'red thin solid';

    inputName.focus();
    inputName.select();
  }
  if (!isValidNum) {
    alertValidaciones.style.display = 'block';
    alertValidacionesTexto2.textContent = 'La cantidad no es válida.';
    inputNumber.style.border = 'red thin solid';

    inputNumber.focus();
    inputNumber.select();
  }
  if (isValidName && !isValidNum) {
    alertValidacionesTexto.textContent = '';
    inputName.style.border = '';
  }
  if (isValidNum && !isValidName) {
    alertValidacionesTexto2.textContent = '';
    inputNumber.style.border = '';
  }
  if (isValidName && isValidNum) {
    alertValidaciones.style.display = 'none';
    inputName.style.border = '';
    inputNumber.style.border = '';
  }
  contador++;
  contadorProd.textContent = contador;
  prodTotal.textContent = totalEnProductos;
});
