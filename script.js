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

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
