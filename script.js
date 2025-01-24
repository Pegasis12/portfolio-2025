// animação color text
document.addEventListener("DOMContentLoaded", () => {
  const destaque = document.querySelector(".destaque");

  destaque.classList.remove("carregando");

  setTimeout(() => {
    destaque.classList.add("carregando");
  }, 50); // atraso para reiniciar a animação
});