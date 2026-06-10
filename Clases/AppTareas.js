import { Tarea } from "./Tarea.js";

export class AppTareas {

    constructor(tareas = []) {
        //si no se le pasa una lista de tareas, se inicializa con una lista vacía
        this.tareas = tareas;
    }
    addTarea(tarea) {
        this.tareas.push(tarea);
    }
    removeTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        //asigna la lista de tareas menos la tarea con el id especificado
        //Usamos filter para eliminar una tarea con un id específico        
    }
    getTareas() {
        return this.tareas;
        //devuelve la lista de tareas
    }
    getTareasCompletadas() {
        return this.tareas.filter(tarea => tarea.estado === 'DONE');
        //devuelve la lista de tareas que tienen el estado 'DONE'
        //asigna una lista de tareas con el estado 'DONE'
    }
}

