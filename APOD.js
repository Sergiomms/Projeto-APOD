var botao = getELement('#botao')
var data = getELement('#data')
var imagem = getELement('#foto')
var imgTitulo = getELement('#imgTitulo')
var video = getELement('#video')
var descricao = getELement('#descricao')

function getELement(texto){

    return document.querySelector(texto)
}

botao.addEventListener('click', function(e){

    e.preventDefault();
    console.log('clique funciona')
    console.log(`${data.value}, Essa foi a data escolhida`)
    buscaInfo()
    mostraImagem()
    mostraDescricao()

})

function mostraImagem(){

    imagem.classList.remove('invisivel')
    imgTitulo.classList.remove('invisivel')
    
}

function mostraVideo(){

    video.classList.remove('invisivel')
}

function mostraDescricao(){

    descricao.classList.remove('invisivel')
}

function buscaInfo(){

    var urlApi = `https://api.nasa.gov/planetary/apod?api_key=yzebceqkkhPWthBi1sqpbeeU1qxfB5uVUMxQGYap&date=${data.value}`

    $.ajax({

        'url' : urlApi,
        'success' : function(result){
            
            var resultado = result
            console.log(resultado) 

            imagem.src = resultado.url
            imgTitulo.textContent = resultado.title
            // video.src = resultado.url
            descricao.textContent = resultado.explanation

        }

    })

}

