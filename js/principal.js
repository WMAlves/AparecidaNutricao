
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

	tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;

	var alturaEhValida = true;

	if (peso <= 0 || peso >= 300) {
		console.log("Peso invalido");
		pesoEhValido = false;
		tdImc.textContent = ("Peso Invalido");
		paciente.classList.add("paciente-invalido")

	}


	if (altura <= 0 || altura>=3.00) {
		console.log("Altura Invalida")
		alturaEhValida=false;
		tdImc.textContent = ('Altura Invalido');
		paciente.classList.add("paciente-invalido")
		
	}


		if(pesoEhValido && alturaEhValida ) {
			var imc = peso / (altura * altura);
			tdImc.textContent = imc.toFixed(2);
		}

		var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function (event) {
		event.preventDefault();
		
		var form = document.querySelector("#form-adiciona");
		var nome = form.nome.value;
		var peso = form.peso.value;
		var altura = form.altura.value;
		var gordura = form.gordura.value;

		console.log(nome);
		console.log(peso);
		console.log(altura
		);
		console.log(gordura);


    });

	//https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web/task/24209
	// parei no tempo de 6min.
}




	




