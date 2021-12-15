let inputCor = document.getElementById('cor-selecionada')
let bgCodigo = document.querySelector('#codigo .bg-codigo')
let btnSalvar = document.getElementById('btn-salvar-projeto')
let codigoProjeto = document.querySelector('code')
let nomeProjeto = document.getElementById('nome-projeto')
let descricaoProjeto = document.getElementById('descricao-projeto')
let autor = document.getElementById('usuario')
let fotoAutor = document.getElementById('foto-usuario')
let linguagem = document.getElementById('linguagens')

let listaProjetos

inputCor.addEventListener('input', () => {
  let corSelecionada = inputCor.value
  bgCodigo.style.backgroundColor = corSelecionada
})

btnSalvar.addEventListener('click', () => {
  let infosProjeto = {
    codigo: codigoProjeto.textContent,
    nome: nomeProjeto.value,
    descricao: descricaoProjeto.value,
    autor: autor.textContent,
    fotoAutor: fotoAutor.getAttribute('src'),
    linguagem: linguagem.value,
    corBg: inputCor.value
  }

  listaProjetos.push(infosProjeto)

  localStorage.setItem('db_infosProjeto', JSON.stringify(listaProjetos))

  // console.log(JSON.parse(localStorage.getItem('db_infosProjeto')))

  location.reload()
})

if (localStorage.getItem('db_infosProjeto')) {
  listaProjetos = JSON.parse(localStorage.getItem('db_infosProjeto'))
} else {
  listaProjetos = []
}

localStorage.setItem('db_usuarioCorrente', autor.textContent)

// ============== APLICAR HIGHLIGHT ==============

let btnHighlight = document.getElementById('btn-highlight')

function aplicarHighlight() {
  let codigo = codigoProjeto.innerText
  codigoProjeto.innerHTML = `<code class=" hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
  codigoProjeto.querySelector('code').textContent = codigo
  hljs.highlightElement(codigoProjeto.querySelector('code'))
}

btnHighlight.addEventListener('click', () => {
  aplicarHighlight()
})
