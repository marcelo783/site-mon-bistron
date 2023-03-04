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
}

function eventoClick(btn) {
  document.querySelector(btn).addEventListener("click", () =>
  document.querySelector(".frente").classList.add("evento"),
  document.querySelector(".verso").classList.add("evento")

);
}