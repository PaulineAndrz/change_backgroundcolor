let button1 = document.querySelector("#button1");
let button2 =  document.querySelector("#button2");
let paragraph = document.querySelector("#paragraph");

// function changeColor (remove, add) {
//     paragraph.classList.remove(remove);
//     paragraph.classList.add(add);
// }

button1.addEventListener("click", () => {
    paragraph.classList.toggle("bg-white");

    if (paragraph.classList.contains("bg-dark")) {
        paragraph.classList.remove("bg-dark");
    }
});

button2.addEventListener("click", () => {
    if (paragraph.classList.contains("bg-white")) {
        // changeColor("bg-white", "bg-dark");
        paragraph.className = "bg-dark";
    } else {
        //changeColor("bg-dark", "bg-white");
        paragraph.className = "bg-white";
    }
})

// Attention, className écrase toutes les autres classes. Donc a utiliser si l'élément n'a pas d'autres classes.