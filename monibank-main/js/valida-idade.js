export default function ehMaiorDeIdade(campo){
    const dataNascimento= new Date(campo.value)
     if (!validaIdade () ) { 
        campo.setcustomvalidity('o usuário não é maior de idade ')
      }
    }



function validaIdade (data){
    const dataAtual = new  date()
    const dateMais18 = new data(data.getUTCfullyear()+ 18, data.getUTCmoth(), data.grtUTCdate())

    return dataAtual >= dateMais18     
}