let button = document.querySelector("#button");
let paragraph = document.querySelector("#paragraph");

button.addEventListener("click", () => {
    paragraph.classList.toggle("bg-white");
});

