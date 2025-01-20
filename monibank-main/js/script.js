import ehUmCPF from "./valida-cpf"

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) => {
    campo.addeventlistener("blur", () => verificacampo(campo))
} )

function verificacampo (campo){
    if (campo,name == "cpf" && campo.value.lenght >= 11){
        ehUmCPF(campo)
    }
}