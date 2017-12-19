var titulo = document.querySelector(".titulo");
titulo.textContent = "Novo título passado por JS";


var trPaciente = document.querySelector(".paciente");

var tdPeso = trPaciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = trPaciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = trPaciente.querySelector(".info-imc");
var imc = tdImc.textContent;

var pesoValido = true;
var alturaValida = true;

if ((peso <= 0) || (peso >= 1000)) {
  console.log("Peso inválido!");
  pesoValido = false;
  tdImc.textContent = "Peso inválido!";
}

if ((altura <= 0) || (altura >= 3.00)) {
  console.log("Altura inválida!");
  alturaValida = false;
  tdImc.textContent = "Altura inválida!";
}

if (pesoValido && alturaValida) {
  imc = peso/(altura*altura);
  tdImc.textContent = imc;
}
