document.getElementById("menu-icon").addEventListener("click", function () {
    const nav = document.querySelector("nav ul");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
