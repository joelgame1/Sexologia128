

function mostrarRespuesta(id) {
    var respuesta = document.getElementById("respuesta" + id);
    if (respuesta.style.display === "none" || respuesta.style.display === "") {
        respuesta.style.display = "block";
    } else {
        respuesta.style.display = "none";
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.left === "0px" || menu.style.left === "") {
        menu.style.left = "-250px"; 
    } else {
        menu.style.left = "0px"; 
    }
}


document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");
    

    if (event.target !== menu && event.target !== menuIcon) {
        menu.style.left = "-250px"; 
    }
});