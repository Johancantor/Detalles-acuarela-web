const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const searchTerm = document.querySelector(".search-box input").value;
  alert("Buscar " + searchTerm);
});
