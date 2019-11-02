export const tarea = 'exportando';

const def = 'defualt';

export default def;

export const crearTarea = (tarea, prioridad) => {
    console.log(`La tarea es ${tarea} con un urgencia ${prioridad}`);
}

export const finTarea = () => {
    console.log(`La tarea termino`);
}