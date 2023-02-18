const links = document.querySelectorAll('.lista-nav li a')


function selecionar(item){
  const urlPagina = document.location.href;
  const href = item.href;
  if (urlPagina.includes(href)) {
    item.classList.add('ativo');
  }
 
}

links.forEach(selecionar);


//Adicionando o efeito de aparecer as perguntas na página de seguros

const pergunta = document.querySelectorAll('.itens-perguntas dt');
console.log(pergunta);

function exibirResposta(resposta) {
  const clicado = resposta.currentTarget;
  resposta = document.querySelector('.itens-perguntas dd');
  clicado.classList.add('aparecer-resposta');
  console.log(resposta);
}

function clicar(clicou) {
  clicou.addEventListener('click' , exibirResposta);
}

pergunta.forEach(clicar);

