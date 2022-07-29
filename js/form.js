var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function (event) {
		event.preventDefault();
		
		var form = document.querySelector("#form-adiciona");
        //Extraindo informações dos paicentes do form
        var paciente = obtemPacienteDoFormulario(form);
        
            console.log(paciente)
        //cria a tr e a td do paciente.
		var pacienteTr = document.createElement("tr");

		var nomeTd = document.createElement("td")
		var pesoTd = document.createElement("td")
		var alturaTd = document.createElement("td")
		var gorduraTd = document.createElement("td")
		var imcTd = document.createElement("td")

		nomeTd.textContent = nome;
		pesoTd.textContent = peso;
		alturaTd.textContent= altura;
		gorduraTd.textContent = gordura;
        imcTd.textContent = calculaIMC(peso,altura);
		

		pacienteTr.appendChild(nomeTd);
		pacienteTr.appendChild(pesoTd);
		pacienteTr.appendChild(alturaTd);
		pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd)
		
		var tabela = document.querySelector("#tabela-pacientes")


        //adicionando paciente na tablela
		tabela.appendChild(pacienteTr);
    });

    function obtemPacienteDoFormulario(form){

        var paciente={
            nome:form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value
        }
        return paciente;
       	
    }