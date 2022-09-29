let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

Window.onscroll = () => {
    navbar.classList.remove("active");
}

const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change',  () => {
        
        document.body.classList.toggle('dark'); 
    });