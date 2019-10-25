// arrow functions

/* let viajando = function(destino) {
    return `Viajando a la ciudad de: ${destino}`;
}; */

/* let viajando = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino} por ${duracion}`;
}; */

let viajando = (destino, duracion) => `Viajando a la ciudad de: ${destino} por ${duracion}`;

let viaje;
viaje = viajando("paris");
viaje = viajando("Londres", '9 dias');

console.log(viaje);