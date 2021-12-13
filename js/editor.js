let inputCor = document.getElementById('cor-selecionada')
let bgCodigo = document.querySelector('#codigo .bg-codigo')
let btnSalvar = document.getElementById('btn-salvar-projeto')
let nomeProjeto = document.getElementById('nome-projeto')
let descricaoProjeto = document.getElementById('descricao-projeto')
let linguagem = document.getElementById('linguagens')

inputCor.addEventListener('input', () => {
  let corSelecionada = inputCor.value
  bgCodigo.style.backgroundColor = corSelecionada
})

btnSalvar.addEventListener('click', () => {
  let infosProjeto = {
    nome: nomeProjeto.value,
    descricao: descricaoProjeto.value,
    linguagem: linguagem.value,
    corBg: inputCor.value
  }

  localStorage.setItem('db_infosProjeto', JSON.stringify(infosProjeto))

  // console.log(JSON.parse(localStorage.getItem('db_infosProjeto')))
})

if (localStorage.getItem('db_infosProjeto')) {
  let projeto = JSON.parse(localStorage.getItem('db_infosProjeto'))

  nomeProjeto.value = projeto.nome
  descricaoProjeto.value = projeto.descricao
  linguagem.value = projeto.linguagem
  inputCor.value = projeto.corBg
  bgCodigo.style.backgroundColor = projeto.corBg
}
