const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) => {
    campo.addeventlistener("blur", () => verificacampo(campo))
} )

function verificacampo (campo){
    

}