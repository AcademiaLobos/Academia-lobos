function mostrar(id) {
  document.getElementById("menu").style.display = "none";
  document.querySelector(".header").style.display = "none";
  document.querySelector(".info").style.display = "none";
  document.getElementById(id).style.display = "block";
}

function volver() {
  document.querySelectorAll(".contenido").forEach(div => {
    div.style.display = "none";
  });
  document.getElementById("menu").style.display = "block";
  document.querySelector(".header").style.display = "block";
  document.querySelector(".info").style.display = "flex";
}
