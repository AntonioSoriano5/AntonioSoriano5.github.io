document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        this.style.backgroundColor = "red";
        this.style.color = "black";
    });
});
