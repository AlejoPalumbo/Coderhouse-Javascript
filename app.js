// Clase para los items del juego
class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Items del juego
const pocion = new Item("Bomba", 100, "bomba.png");
const espada = new Item("Espada", 180, "espada.png");
const escudo = new Item("Escudo", 90, "proteger.png");

// Arrays para el inventario donde se van a ir agregando items que compremos
const inventario = [];

// Oro del juego
let oro = 500;

// Elementos del DOM
const elOro = document.querySelector("#oro span");
elOro.innerText = oro;
const elInventario = document.getElementById("inventario");

// Función para agregar items a nuestro inventario
function comprar(itemDelJuego) {
    //veriificar si tenemos oro disponible
    if (oro - itemDelJuego.precio >= 0){
        inventario.push(itemDelJuego);
        oro -= itemDelJuego.precio;
        actualizarHTML();
    } else{
        alert(`No tenes el oro suficiente para comprar ${itemDelJuego.nombre}.`);
    }
}

// Funcion para vender un item
function vender(nombreDelItem){
    const itemEncontrado = inventario.find((item) => item.nombre == nombreDelItem);

    if (itemEncontrado) {
        oro += itemEncontrado.precio;
        inventario.splice(inventario.indexOf(itemEncontrado), 1);
        actualizarHTML();
    }
}

// Función para actualizar el HTML de la app (oro e items)
function actualizarHTML(){
    elInventario.innerHTML = "";
    for (const itemDelJuego of inventario){
        const indice = inventario.indexOf(itemDelJuego);
        const li = `<li onclick="vender('${itemDelJuego.nombre}')"><img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" /></li>`;
        elInventario.innerHTML += li;
    }
    elOro.innerText = oro;
}