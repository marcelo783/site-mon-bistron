document.querySelector(".hamburger").addEventListener("click", () =>
  document.querySelector(".container").classList.toggle("show-menu")
);


function scrollToElement(secao) {
  const element = document.getElementById(secao);
  const offsetTop = element.offsetTop;
  window.scrollTo({
    top: offsetTop + 0,
    behavior: 'smooth',


  });
};

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});