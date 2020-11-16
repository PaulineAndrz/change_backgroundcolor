let button1 = document.querySelector("#button1");
let button2 =  document.querySelector("#button2");
let paragraph = document.querySelector("#paragraph");

button1.addEventListener("click", () => {
    paragraph.classList.toggle("bg-white");

    if (paragraph.classList.contains("bg-dark")) {
        paragraph.classList.remove("bg-dark");
    }
});

button2.addEventListener("click", () => {
    if (paragraph.classList.contains("bg-white")) {
        changeColor("bg-white", "bg-dark")
    } else {
        changeColor("bg-dark", "bg-white")
    }
    
})

function changeColor (remove, add) {
    paragraph.classList.remove(remove);
    paragraph.classList.add(add);
}