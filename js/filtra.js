var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    


        for (var i = 0; i < pacientes.length; i++) {
            var paicente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = paciente.textContent;

            //if (nome != this.value) {
            //    paicente.classList.add("invisivel");
            //} else {
            //    paicente.classList.remove("invisivel");
            //}
            // necessário continuar daqui: 
            // https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web/task/24465


       
        
    }

   



    

});