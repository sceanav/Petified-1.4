document.addEventListener("DOMContentLoaded", () => {
  const fichasArray = [
    {
      name: "Brutus",
      img: "img/ImagenesWEBP/320/otros/320tortugas-terrestres.webp",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
    {
      name: "Aisha",
      img: "img/ImagenesWEBP/320/otros/320conejo-rex-marron.webp",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
    {
      name: "Dori",
      img: "img/ImagenesWEBP/320/otros/320conejoMargaritas.webp",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
    {
      name: "John",
      img: "img/ImagenesWEBP/320/otros/320lorito2.webp",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis non unde at iusto molestias numquam ad, soluta rerum voluptas eos quidem voluptatibus vitae eaque labore! Minus deserunt debitis consectetur odio? ",
    },
  ];
  let i = 0;
  const ficha = document.querySelector(".ficha2");
  document
    .querySelector(".carousel-prev2")
    .addEventListener("click", funcionmenos);
  document
    .querySelector(".carousel-next2")
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

    fotoFicha.setAttribute("class", "fotoFicha2");
    nombreFicha.setAttribute("class", "nombreFicha2");
    descFicha.setAttribute("class", "descFicha2");
    ficha.appendChild(fotoFicha);
    ficha.appendChild(nombreFicha);
    ficha.appendChild(descFicha);
  }

  function borraFicha() {
    const fotoFicha = document.querySelector(".fotoFicha2");
    const nombreFicha = document.querySelector(".nombreFicha2");
    const descFicha = document.querySelector(".descFicha2");
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
