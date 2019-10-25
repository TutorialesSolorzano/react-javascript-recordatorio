// Object construtor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.uregencia = urgencia;
}

const tarea1 = new Tarea('Tarea1', 'Alta');
const tarea2 = new Tarea('Tarea2', 'Media');
const tarea3 = new Tarea('Tarea3', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);