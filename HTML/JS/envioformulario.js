function enviarFormulario(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores de los campos de entrada
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;

    // Crear un objeto con los valores de los campos
  var datos = {
  nombre: nombre,
  email: email,
  telefono: telefono
  };
  

  // Enviar los datos del formulario a través de Formspree
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/cantor.johan89@gmail.com", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(datos));

  // Mostrar un mensaje de confirmación
  alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
  return true;
}