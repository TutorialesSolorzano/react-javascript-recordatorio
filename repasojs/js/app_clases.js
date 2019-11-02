// Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }

}

class Compra extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }

}

let tarea1 = new Tarea('tarea1', 'prioridad1');
let tarea2 = new Tarea('tarea2', 'prioridad2');
let tarea3 = new Tarea('tarea3', 'prioridad3');

/* tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar(); */

let compra = new Compra('Jabon', 'Urgente', '8');
compra.mostrar();