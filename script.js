// animação color text
document.addEventListener("DOMContentLoaded", () => {
  const destaque = document.querySelector(".destaque");

  destaque.classList.remove("carregando");

  setTimeout(() => {
    destaque.classList.add("carregando");
  }, 50); // atraso para reiniciar a animação
});

//menu header para ativar o after do a ao ser clicado
const links = document.querySelectorAll(".menu-informacoes a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  // metodo includes verifica se tem uma parte doq esta escrito no texto dentro de outro texto
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);