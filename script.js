const checks = document.querySelectorAll(".check");
const contents = document.querySelectorAll(".content");

let isRotated = false;

for (let i = 0; i < checks.length; i++) {
  checks[i].addEventListener("click", () => {
    contents[i].classList.toggle("hidden");
    console.log(checks, contents);
  });
}
