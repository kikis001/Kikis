window.addEventListener("load", () => {
  var nombre = document.getElementById("nombre");
  const boton = document.getElementById("valor");
  var saludo = document.getElementById("saludos");
  boton.addEventListener("click", () => {
    if (nombre.value == "") {
      alert(`Lo siento. Ingrese un dato valido`);
    } else {
      saludo.style.position = "relative";
      saludo.innerText = `Bienvenido ${nombre.value}`;
      saludo.addEventListener("click", () => {
        alert(`Tu nombre es ${nombre.value}`);
      });
    }
  });
});
