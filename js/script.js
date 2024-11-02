document.getElementById("menu-icon").addEventListener("click", function () {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");

    // Animate menu icon
    const spans = this.getElementsByTagName("span");
    this.classList.toggle("active");

    if (nav.classList.contains("active")) {
        spans[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const nav = document.querySelector("nav ul");
    const menuIcon = document.getElementById("menu-icon");

    if (
        !nav.contains(event.target) &&
        !menuIcon.contains(event.target) &&
        nav.classList.contains("active")
    ) {
        nav.classList.remove("active");
        const spans = menuIcon.getElementsByTagName("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
});
