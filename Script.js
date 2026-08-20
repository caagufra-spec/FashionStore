// La Función TotalAPagar es para generar la cuenta total del cliente
function TotalAPagar (PrecioUnitario, Cantidad) {
    const total = PrecioUnitario * Cantidad;
    return total;
}

//Formula para el conteo de Items en el carrito
const AgregarCarrito = document.querySelectorAll("#AgregarCarrito");
const ContadorItemsCarrito = document.querySelector("#ContadorItemsCarrito");

AgregarCarrito.forEach((AgregarCarrito, indice) => {
    AgregarCarrito.addEventListener("click",function() {
        console.log ("Usuario hizo click");
    });
});

