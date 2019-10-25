// Template Strings
const nombre = "Pieda";
const trabajo = "Desarrollador";

//Concatenar javascript
console.log("Nombre: " + nombre + " trabajo: " + trabajo);
console.log(`Nombre: ${nombre} trabajo: ${trabajo}`); //con backtips

//Concatenar varias lineas

const contenedorApp = document.querySelector("#app");

/* let html='<ul>'+
'<li>Nombre: '+nombre+'</li>'+
'<li>Trabajo: '+trabajo+'</li>'+
'</ul>'; */

let html = `<ul>
         <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>
 </ul>`;

contenedorApp.innerHTML = html;
