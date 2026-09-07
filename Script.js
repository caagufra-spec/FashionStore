// La Función TotalAPagar es para generar la cuenta total del cliente
function TotalAPagar (PrecioUnitario, Cantidad) {
    const total = PrecioUnitario * Cantidad;
    return total;
}

//Formula para el conteo de Items en el carrito
const AgregarCarrito = document.querySelectorAll("#AgregarCarrito");
const ContadorItemsCarrito = document.getElementById("ContadorItemsCarrito");

function ContadorItems (Counter) {
    ContadorItemsCarrito.textContent = Number(ContadorItemsCarrito.textContent) +1;
    console.log (ContadorItemsCarrito) //Tiene que actualizar el contador ya que el textContent actualiza la información en el DOM
}

AgregarCarrito.forEach((AgregarCarrito) => {
    AgregarCarrito.addEventListener("click",ContadorItems)
    });

// A continuación vamos a cambiar la orientación del menú de lamnera lateral 
const NavMain = document.querySelectorAll("#Navbar")

nav.classList.toggle ('nav-lateral');
