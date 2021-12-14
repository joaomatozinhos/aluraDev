let postsCodigos = document.getElementById('codigos')

if (localStorage.getItem('db_infosProjeto')) {
  listaProjetos = JSON.parse(localStorage.getItem('db_infosProjeto'))

  for (projeto of listaProjetos) {
    postsCodigos.innerHTML += `
  <div class="codigo">
  <div class="bg-codigos bg-color" style="background-color: ${projeto.corBg}" >
    <div class="code">
      <textarea name="codigo" disabled>
${projeto.codigo}
      </textarea>
      <img src="../assets/mac_buttons.svg" class="btn-mac" />
    </div>
  </div>
  <div class="post-projeto">
    <div class="descricao-projeto">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    </div>
    <div class="social-projeto">
      <div class="interacao-projeto">
        <div class="btn">
          <button class="btn-social">
            <i class="fas fa-comment"></i>
          </button>
          <span>9</span>
        </div>
        <div class="btn">
          <button class="btn-social">
            <i class="fas fa-heart"></i>
          </button>
          <span>9</span>
        </div>
      </div>
      <div class="autor-projeto">
        <a href="#">
          <img src="${projeto.fotoAutor}" alt="Usuário" /><span>@${projeto.autor}</span>
        </a>
      </div>
    </div>
  </div>
  </div>    
  `
  }
}

let usuario = document.getElementById('usuario')
usuario.textContent = localStorage.getItem('db_usuarioCorrente')
