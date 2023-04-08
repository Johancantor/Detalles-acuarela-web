const searchButton = document.getElementById("search-btn");
const searchBox = document.getElementById("buscador");

searchButton.addEventListener("click", function() {
  const searchTerm = searchBox.value;
  alert("Buscar por: " + searchTerm);
  // Aquí puedes agregar la lógica para buscar la información que necesites
});


