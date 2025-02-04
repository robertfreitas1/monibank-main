import ehUmCPF from "./valida-cpf"
import ehMaiorDeIdade from "./valida-idade"
const camposDoFormulario = document.querySelectorAll("[required]")
const formulario = document.queryselector("[data-formulario]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas))
    window.location.href = " ./abrir-conta-form2.html"
} )


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
    campo.setvalidity('')
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