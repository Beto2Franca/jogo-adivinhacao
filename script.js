function adivinharNumero(){
    let numero = document.getElementById('inum')
    let res = document.getElementById('res')

    if(numero.value.length == 0){
        window.alert('Digite um numero.')
    }else if(numero.value <1 || numero.value > 1000){
        window.alert('Digte um número entre 1 e 1000')
    }if(numero.value == 55){
        res.innerHTML ='Você acertou!'
    }else{
        res.innerHTML='Não é esse número!'
    }


}