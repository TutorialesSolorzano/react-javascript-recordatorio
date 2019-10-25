function mostrarInfo(tarea, prioridad) {
    return `La tarea ${tarea} tiene un aprioridad ${prioridad}`;
}

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}

const mostrar2 = mostrarInfo(persona.nombre, persona.profesion);

//console.log(persona);
//console.log(mostrar2);

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.uregencia = urgencia;
}

Tarea.prototype.mostrar = function() {
    return `La tarea ${this.nombre} tiene un aprioridad ${this.uregencia}`;
}
const tarea1 = new Tarea('Tarea1', 'Alta');

const mostrar = mostrarInfo(tarea1.nombre, tarea1.uregencia);

console.log(tarea1);
console.log(tarea1.mostrar());
//console.log(mostrar);