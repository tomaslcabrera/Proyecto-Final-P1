class Objects{
    constructor(nombre,precio,stock,categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

function hayStock(objeto){
    if(objeto.stock>0){
        carrito.push(objeto);
        objeto.stock -= 1;
}else{
    alert("El producto no esta disponible");
}
}

const monitor = new Objects("Asus 144hz",120,3,"Monitor");
const monitor2 = new Objects("Asus 240hz",220,50,"Monitor");
const monitor3 = new Objects("LG 27 Pulgadas",60,1000,"Monitor");
const periferico = new Objects("Logitech",40,1000,"Periferico");
const periferico2 = new Objects("Logitech",40,1000,"Periferico");
const sonido = new Objects("Logitech Bluetooth",100,500,"Sonido");
const sonido2 = new Objects("AirPods Pro Max",500,50,"Sonido");

const inventario = [];

inventario.push(monitor,monitor2,monitor3,periferico,periferico2,sonido,sonido2);

for (const producto of inventario){
    producto.sumaIva();
}

const carrito = [];

let entrada =  prompt("SELECCIONAR QUE PRODUCTO DESEA \n 1 - Monitores\n 2 - Perifericos\n 3 - Sonido");
let total = 0;
while (entrada != "ESC") {
    switch (entrada) {
        case "1":
            let numero = prompt("Seleccionaste Monitores, tenemos disponibles los siguientes productos(digite un número entre 1 y 3): \n" + "1 - $" + monitor.precio + " " + monitor.nombre + "\n 2 - $" + monitor2.precio + " " + monitor2.nombre + "\n 3 - $" + monitor3.precio + " " + monitor3.nombre);
            if(isNaN(numero) || (numero>3 || numero<0)){
                alert("ERROR");
                break;
            }
            switch(numero){
                case "1":
                    hayStock(monitor);
                    break;
                case "2":
                    hayStock(monitor2)
                    break;
                case "3":
                    hayStock(monitor3)
                    break;
                default:
                    alert("ERROR");
                    break;
            }
            break;
        case "2":
            let numero2 = prompt("Seleccionaste Perifericos, tenemos disponibles los siguientes productos(digite un numero entre 1 y 2): \n" + "1 - $" + periferico.precio + " " + periferico.nombre + "\n 2 - $" + periferico2.precio + " " + periferico2.nombre);
            if(isNaN(numero2) || (numero2>2 || numero2<0)){
                alert("ERROR");
                break;
            }
            switch(numero2){
                case "1":
                    hayStock(periferico);
                    break;
                case "2":
                    hayStock(periferico2);
                    break;
                default:
                    alert("ERROR");
                    break;
            }
            break;
        case "3":
            let numero3 = prompt("Seleccionaste Sonido, tenemos disponibles los siguientes productos(digite un numero entre 1 y 2): \n" + "1 - $" + sonido.precio + " " + sonido.nombre + "\n 2 - $" + sonido2.precio + " " + sonido2.nombre);
            if(isNaN(numero3) || (numero3>2 || numero3<0)){
                alert("ERROR");
                break;
            }
            switch(numero3){
                case "1":
                    hayStock(sonido);
                    break;
                case "2":
                    hayStock(sonido2);
                    break;
                default:
                    alert("ERROR");
                    break;
            }
            break;
        default:
            alert("ERROR");
            break;
    } if(confirm("¿Desea seguir comprando?")){
    } else break;
    entrada = prompt("SELECCIONAR QUE PRODUCTO DESEA \n 1 - Monitores\n 2 - Perifericos\n 3 - Sonido");
} 

carrito.forEach((num) => {total += parseFloat(num.precio)});

alert("El precio total es de: $" + Math.round(total));