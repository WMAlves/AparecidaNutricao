
    				var titulo = document.querySelector(".titulo");
				console.log(titulo);
				console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i =0;i<pacientes.length;i++){
	//console.log(pacientes[i].textContent);

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdGordura = paciente.querySelector(".info-gordura");
	var gordura = tdGordura.textContent;

	tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso); //true ou false

	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		console.log("Peso invalido");
		pesoEhValido = false;
		tdImc.textContent = ("Peso Invalido");
		paciente.classList.add("paciente-invalido")

	}


	if (!alturaEhValida) {
		console.log("Altura Invalida")
		alturaEhValida=false;
		tdImc.textContent = ('Altura Invalido');
		paciente.classList.add("paciente-invalido")
		
	}


		if(pesoEhValido && alturaEhValida ) {
			var imc = calculaIMC(peso,altura);
			tdImc.textContent = imc;
		}
}

function validaPeso(peso) {

	if (peso > 0 && peso < 1000 && peso !=" ") {
		return true;
	} else {
		return false;
    }

}

function validaAltura(altura) {
	if (altura > 0 && altura <= 3.00 && altura!=" ") {
		return true;
	} else {
		return false;
    }
}

function validaGordura(gordura) {
	if (gordura > 0 && gordura != " ") {
		return true;
	} else {
		return false;
    }
}

function calculaIMC(peso,altura){
	imc=peso/(altura*altura);
	return imc.toFixed(2);
}
	

	//https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web/task/24209
	// parei no tempo de 6min.





	




