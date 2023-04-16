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

let miformulario = document.querySelector("#formulario");

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
    case "usuario":
      if (expresiones.usuario.test(e.target.value)) {
        document
          .querySelector("#campo-usuario .campo-error")
          .classList.remove("campo-error-activo");
      } else {
        document
          .querySelector("#campo-usuario .campo-error")
          .classList.add("campo-error-activo");
      }
      break;

    case "password":
      break;

    case "email":
      break;
  }
};

// -----------------------------------paso3
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
