let input = document.querySelector(".input");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");

icon1.addEventListener("click", () => {
    input.type = "text";
    icon2.style.display = "block";
    icon1.style.display = "none";
})
icon2.addEventListener("click", () => {
    input.type = "password";
    icon1.style.display = "block";
    icon2.style.display = "none";
})