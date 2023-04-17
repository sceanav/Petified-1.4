//----------------------------------------
//---- Expresiones Regulares y Campos ----
//----------------------------------------
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, números, guión y guión bajo
  password: /^.{6,12}$/, // 8 a 12 caracteres (cualquier)
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  usuario: false,
  password: false,
  correo: false,
};

//----------------------------------------
//-------------- Selectores --------------
//----------------------------------------
const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario .campo-input");

//----------------------------------------
//-------------- Validacion --------------
//----------------------------------------
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.usuario.test(e.target.value)) {
        document
          .querySelector("#campo-nombre .campo-error")
          .classList.remove("campo-error-activo");
      } else {
        document
          .querySelector("#campo-nombre .campo-error")
          .classList.add("campo-error-activo");
      }
      break;

    case "telefono":
      if (expresiones.telefono.test(e.target.value)) {
        document
          .querySelector("#campo-telefono .campo-error")
          .classList.remove("campo-error-activo");
      } else {
        document
          .querySelector("#campo-telefono .campo-error")
          .classList.add("campo-error-activo");
      }
      break;

    case "correo":
      if (expresiones.correo.test(e.target.value)) {
        document
          .querySelector("#campo-correo .campo-error")
          .classList.remove("campo-error-activo");
      } else {
        document
          .querySelector("#campo-correo .campo-error")
          .classList.add("campo-error-activo");
      }
      break;
  }
};

//----------------------------------------
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

//----------------------------------------
//---------- Validar Formulario ----------
//----------------------------------------

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //prevenimos que se envíen los datos antes de validarlos

  const checkbox = document.querySelector("#checkbox");
  //para el check box ponemos .checked como atributo validado
  if (campos.usuario && campos.password && checkbox.checked) {
    formulario.reset();

    document
      .querySelector("#mensaje-exito")
      .classList.add("mensaje-exito-activo");
    //temporizador para que desaparezca el mensaje pasado un tiempo
    setTimeout(() => {
      document
        .querySelector("#mensaje-exito")
        .classList.remove("mensaje-exito-activo");
    }, 5000);
  } else {
    document
      .querySelector("#campo-mensaje")
      .classList.add("campo-mensaje-activo");
    //temporizador para que desaparezca el mensaje pasado un tiempo
    setTimeout(() => {
      document
        .querySelector("#campo-mensaje")
        .classList.remove("campo-mensaje-activo");
    }, 5000);
  }
});
