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
const CloseButtonSideBar = document.getElementById('CloseButton')
const SideBarButton = document.getElementById('MenuButtomOpen')
const Sidebar = document.getElementById('Sidebar')

// Para abrir o cerrar el menú al hacer click en el botón principal
SideBarButton.addEventListener ('click',() => {
    Sidebar.classList.toggle ('active');
});

// Cerrar el menú con el botón de cierre dentro del sidebar
CloseButtonSideBar.addEventListener('click', () => {
    Sidebar.classList.remove('active');
});
