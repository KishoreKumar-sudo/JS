//By passing the {once:true} option as the 3rd argument, we ensure that event listener will be triggered only once.
let button = document.querySelector("button")
button.addEventListener("click", () => {
    console.log("Button Clicked!");
}, { once: true })