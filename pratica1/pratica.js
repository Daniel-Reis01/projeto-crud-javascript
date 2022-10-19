// document.querySelector('html').onclick = function() {
//     alert('bem vindo a o  ambiente de estudos javscript');
// }


let minhaImagem = document.querySelector("img");

minhaImagem.onclick = function() {

    let meuSrc = minhaImagem.getAttribute('src');

    if (meuSrc === 'file:\Users\Pichau\Desktop\projeto crud javascript\img\maleta.png') {
        minhaImagem.setAttribute('src','file:\Users\Pichau\Desktop\projeto crud javascript\img\pc.png');
    }else{
        minhaImagem.setAttribute('src','file:\Users\Pichau\Desktop\projeto crud javascript\img\maleta.png');

    }
}

