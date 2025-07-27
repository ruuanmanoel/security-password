const body = document.getElementById("body");
const toggleThema = document.getElementById("toggle-thema");

toggleThema.addEventListener("click", () => {
  body.classList.toggle("light");
});
