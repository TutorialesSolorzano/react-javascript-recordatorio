// Agregando funciones dentro de objetos

const persona={
    nombre: 'Rodolfo',
    profesion: 'Futbolista',
    equipo: 'Monterrey',
    mostrarInfo(){
        console.log(`${this.nombre} es ${this.profesion} en el ${this.equipo}`);
    }
}

persona.mostrarInfo();