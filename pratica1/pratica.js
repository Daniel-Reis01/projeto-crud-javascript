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

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
    let meuNome = prompt('por favor, digite seu nome.');
    if(!meuNome || meuNome === null){
        defineNomeUsuario();
    } else {

        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'javascript é legal, ' + meuNome;
    }
}
 
  if(!localStorage.getItem('nome')){
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'javascript é legal, ' + nomeGuardado;
  }

  meuBotao.onclick = function(){ defineNomeUsuario();
 }