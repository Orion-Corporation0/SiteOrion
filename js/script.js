const containerCards = document.querySelector('.container-cards');
const btnDirEquipe = document.querySelector('.direita-equipe');
const btnEsqEquipe = document.querySelector('.esquerda-equipe');

btnDirEquipe.addEventListener('click', () => {
  containerCards.scrollBy({
    left: 260,
    behavior: "smooth"
  });
});

btnEsqEquipe.addEventListener('click', () => {
  containerCards.scrollBy({
    left: -260,
    behavior: "smooth"
  });
});
