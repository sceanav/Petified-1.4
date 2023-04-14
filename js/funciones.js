const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, números, guión y guión bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
  password: /^.{6,12}$/, // 8 a 12 caracteres (cualquier)
  password2: /^.{6,12}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{8,14}$/, // 8 a 14 dígitos
};

/*const campos = {
  usuario: false,
  nombre: false,
  password: false,
  password2: false,
  correo: false,
  telefono: false,
};*/

let miformulario = document.querySelector("#formulario");

inputs.array.forEach((input) => {
  input.addEventListener("keyup", validaFormulario(miformulario)); //llamo a validar cada vez que dejo de pulsar una tecla
  input.addEventListener("blur", validaFormulario(miformulario)); //llamo a validar cuando cambio de campo (pierdo el foco del campo actual)
});

function validaFormulario(e) {
  switch (e.target.name) {
    case "nombre":
      if (e.target.test(e.target.value)) {
      } else {
        e.querySelector("#errorNombre").classList.remove("invisible");
        e.querySelector("#errorNombre").classList.add("visible");
      }

    case "correo":
      if (e.correo.test(e.target.value)) {
      } else {
        e.querySelector("#errorCorreo").classList.remove("invisible");
        e.querySelector("#errorCorreo").classList.add("visible");
      }
      break;
    case "password":
      if (e.password.test(e.target.value)) {
      } else {
        e.querySelector("#errorPassword").classList.remove("invisible");
        e.querySelector("#errorPassword").classList.add("visible");
      }
      break;
  }
}
