function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.left === "0px" || menu.style.left === "") {
        menu.style.left = "-250px"; // Ocultar el menú
    } else {
        menu.style.left = "0px"; // Mostrar el menú
    }
}

// Agregamos un manejador de eventos al documento para cerrar el menú
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");
    
    // Comprobamos si el clic ocurrió fuera del menú y del icono del menú
    if (event.target !== menu && event.target !== menuIcon) {
        menu.style.left = "-250px"; // Ocultar el menú
    }
});