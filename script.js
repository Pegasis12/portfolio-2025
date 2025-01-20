// animação color text
// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o elemento com a classe 'destaque'
  const destaque = document.querySelector(".destaque");

  // Remove a classe 'carregando' caso já tenha sido adicionada
  destaque.classList.remove("carregando");

  // Reaplica a classe 'carregando' com um pequeno atraso
  setTimeout(() => {
    destaque.classList.add("carregando");
  }, 50); // Pequeno atraso para reiniciar a animação
});



