const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{8,14}$/, // 8 a 14 dígitos
};

const campos = {
  nombre: false,
  telefono: false,
  correo: false,
};

//--------------------
//---- Selectores ----
//--------------------
// -----------------------------------paso2
const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario .campo-input");

// --------------------
// ---- Validación ----
// --------------------
// -----------------------------------paso4
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
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

// -----------------------------------paso3
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario(formulario));
  input.addEventListener("blur", validarFormulario(formulario));
});
