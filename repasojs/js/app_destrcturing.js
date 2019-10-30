// Destructuring de objetos

const aprendiendoJs = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    framaworks: ['React', 'VueJS', 'AngularJS']
}

//Destrcturing es extraer valores de un objeto

//console.log(aprendiendoJs);

// vaersion anterior
/* let version = aprendiendoJs.version.nueva;
let framework = aprendiendoJs.framaworks[1]; */

//console.log(framework);

//version nueva

let { version, framaworks } = aprendiendoJs;
console.log(version);