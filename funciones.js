(() => {
  "use strict";

  const galeriaContenedor = document.querySelector(".gallery");
  const galeriaImagenes = document.querySelector(".gallery__box");
  const listaFiguras = document.querySelectorAll(".box__figure");
  const visualizadorCaja = document.querySelector(".visualizador");
  const visualizadorImg = document.getElementById("visualizador__img");

  for (const itemFigura of listaFiguras) {
    itemFigura.addEventListener("click", (event) => {
      visualizadorImg.src = event.target.children[0].src;

      galeriaImagenes.classList.add("ajustar__box");
      galeriaContenedor.classList.add("mostrar__visualizador");
      visualizadorCaja.classList.add("visible__block");
    });
  }

  const btnCerrar = document.querySelector(".visualizador__cerrar");
  btnCerrar.addEventListener("click", (event) => {
    galeriaImagenes.classList.remove("ajustar__box");
    galeriaContenedor.classList.remove("mostrar__visualizador");
    visualizadorCaja.classList.remove("visible__block");
  });
  
})();
