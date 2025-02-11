document.querySelector('.Menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.NavBar__Links');
    navLinks.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.getElementById("burgerButton");
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.querySelector(".NavBar__Links"); // Select regular nav links

    burgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle("show"); // Toggle the visibility of the menu
        navLinks.style.display = burgerMenu.classList.contains("show") ? "none" : "flex"; // Hide nav when burger is active
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!burgerButton.contains(event.target) && !burgerMenu.contains(event.target)) {
            burgerMenu.classList.remove("show");
            navLinks.style.display = "flex"; // Restore regular nav when menu closes
        }
    });
});




