//Funciones en arreglos

const personas = [
    {nombre: 'Ivan', edad: 25, aprendiendo: 'JavaScript'},
    {nombre: 'Alfredo', edad: 28, aprendiendo: 'Java'},
    {nombre: 'Ovidio', edad: 22, aprendiendo: 'ReactJS'},
    {nombre: 'Edgar', edad: 24, aprendiendo: 'Angular'},
]

console.log(personas);

//Mayores a 25

const mayores = personas.filter( persona => {
 return persona.edad > 25;
});

console.log(mayores);

// que aprende Ivan y su edad

const ivan = personas.find( persona => {
    return persona.nombre === 'Ivan';
});

console.log(ivan);

let total = personas.reduce((edadTotal, persona) => {
return edadTotal + persona.edad;
}, 0);

console.log(total);