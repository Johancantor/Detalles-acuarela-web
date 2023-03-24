function validarFormulario() {
  // Obtener los campos de entrada
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  
  // Validar el campo nombre
  if (nombre == "") {
    alert("Por favor ingrese su nombre");
    return false;
  }
  
  // Validar el campo email
  if (email == "") {
    alert("Por favor ingrese su dirección de correo electrónico");
    return false;
  } else if (!(/\S+@\S+\.\S+/).test(email)) {
    alert("Por favor ingrese una dirección de correo electrónico válida");
    return false;
  }
  
  // Validar el campo teléfono
  if (telefono == "") {
    alert("Por favor ingrese su número de teléfono");
    return false;
  } else if (isNaN(telefono)) {
    alert("Por favor ingrese un número de teléfono válido");
    return false;
  }
  
  // Si todos los campos son válidos, enviar el formulario
  alert("El formulario se ha enviado correctamente");
  return true;
}

