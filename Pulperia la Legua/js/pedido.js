const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const procesarPedidoBtn = document.getElementById("procesar-pedido");

cargarEventos();

function cargarEventos() {
    //Evento de agregar carrito
    productos.addEventListener("click", (e) => {
        carro.comprarProducto(e);
    });

    //Evento de eliminar productos del carrito
    carrito.addEventListener("click", (e) => {
        carro.eliminarProducto(e);
    });

    //Evento de vaciar carrito
    vaciarCarritoBtn.addEventListener("click", (e) => {
        carro.vaciarCarrito(e);
    });
    //Evento de al cargar el documento se muestra lo almacenado en Local Storage
    document.addEventListener("DOMContentLoaded", () => {
        carro.leerLocalStorage();
    });
    //Enviar pedido a la pagina comprar
	procesarPedidoBtn.addEventListener("click", (e) => {
		carro.procesarPedido(e);
	});

}