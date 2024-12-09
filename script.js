// Event listener for the .menu element
document.querySelector(".menu").addEventListener("click", () => {
    const navbar=document.querySelector(".navbar").classList.toggle("change");
    const menu=document.querySelector(".menu").classList.toggle("change");
    navbar.classList.toggle("change");
    menu.classList.toggle("change")  
    });


// Automatic icon changer
const icons = document.querySelectorAll(".section1-icons i");
let currentIndex = 0;

setInterval(() => {
    icons[currentIndex].classList.remove("change");
    currentIndex = (currentIndex + 1) % icons.length; // Loop back to the first icon
    icons[currentIndex].classList.add("change");
}, 1000);
