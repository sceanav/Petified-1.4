document.addEventListener("DOMContentLoaded", () => {
  const fichasArray = [
    {
      name: "Napoleon",
      img: "img/ImagenesWEBP/320/gatos/320gatoCachorro.webp",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
    {
      name: "Kiara",
      img: "img/ImagenesWEBP/320/gatos/320gatoNaranjaAsoma.webp",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
    {
      name: "Augusto",
      img: "img/ImagenesWEBP/320/gatos/320gatoFondoClaro.webp",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
    {
      name: "SuperMiau",
      img: "img/ImagenesWEBP/320/gatos/320gatoLucesSuelo.webp",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
  ];
  let i = 0;
  const ficha = document.querySelector(".ficha");
  document
    .querySelector(".carousel-prev")
    .addEventListener("click", funcionmenos);
  document
    .querySelector(".carousel-next")
    .addEventListener("click", funcionmas);

  function funcionmas() {
    i = incrementa(i);
  }

  function funcionmenos() {
    i = decrementa(i);
  }

  function muestraFicha(index) {
    const fotoFicha = document.createElement("img");
    const nombreFicha = document.createElement("h3");
    const descFicha = document.createElement("p");
    descFicha.innerText = fichasArray[index].desc;
    nombreFicha.innerText = fichasArray[index].name;
    fotoFicha.setAttribute("src", fichasArray[index].img);

    fotoFicha.setAttribute("class", "fotoFicha");
    nombreFicha.setAttribute("class", "nombreFicha");
    descFicha.setAttribute("class", "descFicha");
    ficha.appendChild(fotoFicha);
    ficha.appendChild(nombreFicha);
    ficha.appendChild(descFicha);
  }

  function borraFicha() {
    const fotoFicha = document.querySelector(".fotoFicha");
    const nombreFicha = document.querySelector(".nombreFicha");
    const descFicha = document.querySelector(".descFicha");
    ficha.removeChild(fotoFicha);
    ficha.removeChild(nombreFicha);
    ficha.removeChild(descFicha);
  }

  function incrementa(index) {
    borraFicha();
    if (index == fichasArray.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    muestraFicha(index);
    return index;
  }

  function decrementa(index) {
    borraFicha();
    if (index > 0) {
      index = index - 1;
    } else {
      index = fichasArray.length - 1;
    }
    muestraFicha(index);
    return index;
  }

  muestraFicha(i);
});
