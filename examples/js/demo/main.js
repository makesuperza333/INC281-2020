
let button = document.getElementById("btn");
let counter = 0;
button.addEventListener("click", () => {
    counter++;
    console.log("Clicked: " + counter);
});
