const pulsante = document.getElementById("pulsante");

if (localStorage.getItem("tema") === "chiaro") {
  document.body.classList.add("chiaro");
}

pulsante.addEventListener("click", function() {
  document.body.classList.toggle("chiaro");
  if (document.body.classList.contains("chiaro")) {
    localStorage.setItem("tema", "chiaro");
  } else {
    localStorage.setItem("tema", "scuro");
  }
});