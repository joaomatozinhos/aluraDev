var postsCodigos = document.getElementById('codigos')

for (let i = 0; i < 4; i++) {
  postsCodigos.innerHTML += `
<div class="codigo">
<div class="bg-codigos bg-color${i + 1}">
  <div class="code">
    <textarea name="codigo" id="codigo1">
const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
const go = (f, seed, acc) => {
const res = f(seed)
return res ? go(f, res[1], acc.concat([res[0]])) : acc
}
return go(f, seed, [])
}
    </textarea>
    <img src="../assets/mac_buttons.svg" class="btn-mac" />
  </div>
</div>
<div class="post-projeto">
  <div class="descricao-projeto">
    <h3>Título do projeto</h4>
    <p>Essa é a descrição do meu projeto.</p>
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
        <img src="../assets/usuario.svg" alt="Usuário" /><span>@Harry</span>
      </a>
    </div>
  </div>
</div>
</div>    
`
}
