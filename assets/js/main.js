let button = document.querySelector("#button");
let body = document.querySelector("body");

console.log(button)
button.addEventListener("click", () => {
    body.classList.toggle("bg-white");
});
