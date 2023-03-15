function validateForm(){
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value
  var message = document.getElementById('message').value
  var password = document.getElementById('password').value
  
  var objetoProducto = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      password: password
  }
  //console.log(objetoProducto)
  if(localStorage.getItem(objetoProducto.email)){
          alert("Ya existe el usuario")
          return false
  }

  var objetoString = JSON.stringify(objetoProducto)
  

  localStorage.setItem(objetoProducto.email,objetoString)
 // console.log(objetoString)
  leerObjeto()
  return false;
}

function leerObjeto(){
  console.log(JSON.parse(localStorage.getItem("ca@ex.com")))
}