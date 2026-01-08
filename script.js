var btn = document.querySelector("button");
var h = document.querySelector("h4");
var f = document.querySelector("h2");
btn.addEventListener("click", function () {
  h.textContent = "Project is Live";
  f.style.color = "blueviolet";
});
