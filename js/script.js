function selecionado(categoria){
    
    let elem = document.getElementsByClassName('produto')
    console.log(elem)
    for(let i=0; i< elem.length; i++){
        console.log(elem[i].id)
        if(categoria == elem[i].id){
            elem[i].style = "display:block"
        }else{
            elem[i].style ='display:none'
        }
    }

}

let seleciona_geral = () => {
    let elem = document.getElementsByClassName('produto')
    for(let i=0; i< elem.length; i++){
            elem[i].style = "display:block"
    }
}

let destaque = (imagem) => {
    console.log(imagem)
    if(imagem.style == 'width:300px' )
        imagem.style = 'width:200px'
    
    else
        imagem.style = 'width:300px'
    
    
}
