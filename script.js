// Espera até que toda a página esteja carregada
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento que tem a classe 'destaque'
  var elementoDestaque = document.querySelector(".destaque");
  // Adiciona a classe 'carregando' ao elemento
  elementoDestaque.classList.add("carregando");
});
