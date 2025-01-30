import ehUmCPF from "./valida-cpf"
import ehMaiorDeIdade from "./valida-idade"
const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) => {
    campo.addeventlistener("blur", () => verificacampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault() )
} )

const  tiposDeEro = [
    'valueMissing', 
    'typeMismatch',
    'patternMismatch',
    'tooshort',
    'customError'

]

const mensagens = {
    nome: {
        valueMissing: "o campo de nome pode estar vazio.",
        pattermMismatch: "por favor, prencha um nome válido",
        tooShort:" por favot, prencha um nome válido."

    },
    email: {
        valueMissing: "o campo de e-mail pode estar vazio.",
        pattermMismatch: "por favor, prencha um e-mail válido",
        tooShort:" por favot, prencha um nome válido."
    },
    rg: {
        valueMissing: "o campo de RG pode estar vazio.",
        pattermMismatch: "por favor, prencha um RG válido",
        tooShort:" por favot, prencha um nome válido."
    }
}

function verificaCampo(campo) {
    let mensagem = ""
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
   tiposDeEro.forEach(erro =>  {
    if (campo.validity[erro] ) {
        mensagem = mensagens[campo.name][erro]
        
    }
   })
   const mensagemEro = campo.parentNode.queryselector('.mensaegm-erro')
   const validaorDeInput = campo.checkvalidity()

   if (!validaorDeInput){
    mensagemEro.textcontent = mensagem
   } else {
    mensagemEro.textcontent = ""
   }
}