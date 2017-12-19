var titulo = document.querySelector(".titulo");
titulo.textContent = "Novo título passado por JS";


var paciente = document.querySelector(".paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = tdImc.textContent;

imc = peso/(altura*altura);
tdImc.textContent = imc;
