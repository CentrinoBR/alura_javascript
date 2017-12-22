var titulo = document.querySelector(".titulo");
titulo.textContent = "Novo título passado por JS";

var pacientes = document.querySelectorAll(".paciente");
var tamanhoListaPacientes = pacientes.length;

for (var i = 0; i < tamanhoListaPacientes; i++) {
  console.log(pacientes[i]); //so pra ver o array no console, com cada um dos elementos que o querySelectorAll conseguiu capturar

  var tdPeso = pacientes[i].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[i].querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes[i].querySelector(".info-imc");
  var imc = tdImc.textContent;

  var pesoValido = true;
  var alturaValida = true;

  if ((peso <= 0) || (peso >= 1000)) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    pacientes[i].style.backgroundColor = "lightcoral";
  }

  if ((altura <= 0) || (altura >= 3.00)) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
  }

  if (pesoValido && alturaValida) {
    imc = peso/(altura*altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
