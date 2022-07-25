
    				var titulo = document.querySelector(".titulo");
				console.log(titulo);
				console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

				
//console.log(paciente);
//console.log(tdPeso);
//console.log(peso);
//console.log(altura);

tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;

var alturaEhValida = true;

if (peso < 0 || peso > 100) {
	console.log("Peso invalido");
	pesoEhValido = false;
	tdImc.textContent = ("Peso Invalido");
}

if (altura < 0 || altura > 3,00) {
	console.log("Altura invalida");
	alturaEhValida = false;
	tdImc = ("Altura invalida");
}

	if (pesoEhValido && alturaEhValida) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc;

	}

//https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web/task/24668
//verificar pq o calculo de altura não está correto.


