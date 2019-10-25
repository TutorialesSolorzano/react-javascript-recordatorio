// parametros por defualt en las funciones
//function declaration 
/* function actividad(nombre = 'Walter White', actividad = 'Enseñando Quimica') {
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
} */

//function expretion 
const actividad = function(nombre = 'Walter White', actividad = 'Enseñando Quimica') {
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
}

actividad('Pieda', 'Desarrollando');
actividad('Jesse');
actividad();