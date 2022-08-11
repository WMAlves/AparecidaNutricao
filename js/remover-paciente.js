var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){

    console.log(event.target);

    event.target.parentNode.classList.add("fadeOut");

   setTimeout(function()  {
    event.target.parentNode.remove(); //event é para chamar um evento
                                     // parentNode é para "caminhar até o pai"
    
   }, 500);
});








