const pattern = /""/; /* key sensitive:
                    ^ al inicio; al final $; 
                    se pueden grupos [A-Za-z]; 
                    [0-9] {cant min, cant max};
                    \s un espacio;
                    \s espacio inicial [0-3]{2,}\s espacop final
                    {1,} uno o mas => +
                    \s?-? hay espacio o guion
                    | es un o */

const result = pattern.test("Me encantan las expresiones regulares");
result ? console.log("Patron aprobado") : console.log("Patron no aprobado");

//meta caracteres

/*
\d => [0-9]
[a-zA-Z0-9] => \w
\d{1,},\d{1,} => flotante
*/


// hapi/joi
// yup
// validar una contraseña (Al menos una mayuscula, 3 minusculas, un caracter especial, un número)

/*
const validateNA = (e) => {
    const { value: string, id } = e.target;
    const pattern = /^[a-zA-Z]{1}[a-z]{1,16}/;
    validate(pattern, string, `l${id}`);
  };
  
  const validateEmail = (e) => {
    const { value: string, id } = e.target;
    const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})/;
    validate(pattern, string, `l${id}`);
  };
  const validateTel = (e) => {
    const { value: string, id } = e.target;
    const pattern = /(\+54)\s?\d{2}\s?-?\d{4}\s?-?\d{4}$/;
    validate(pattern, string, `l${id}`);
  };
  const validateDate = (e) => {
    const { value: string, id } = e.target;
    const pattern = /([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
    validate(pattern, string, `l${id}`);
  };
  
  // validatePassword()
  const validate = (pattern, string, id) => {
    console.log(pattern, string, id);
    pattern.test(string)
      ? (document.getElementById(id).innerHTML = "")
      : (document.getElementById(id).innerHTML = "Campo invalido");
  };
  
  const start = () => {
    document.getElementById("nombre").addEventListener("blur", validateNA);
    document.getElementById("apellido").addEventListener("blur", validateNA);
    document.getElementById("mail").addEventListener("blur", validateEmail);
    document.getElementById("tel").addEventListener("blur", validateTel);
    document.getElementById("date").addEventListener("blur", validateDate);
    document.getElementById("patente").addEventListener("blur", validateDate);
  };
  
  window.onload = start;
  */