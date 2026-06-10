'use strict';
// no es necesario con module
//module sirve para exportar la clase a otros archivos

import { AppTareas } from "./AppTareas.js";
import { Tarea } from "./Tarea.js";


const app = new AppTareas();

app.addTarea(new Tarea( 'Hacer la compra', 'TO_DO'));
app.addTarea(new Tarea( 'Lavar el coche', 'DONE'));
app.addTarea(new Tarea( 'Pagar las facturas', 'TO_DO'));
console.log(app.tareas);

// app.removeTarea(3);
console.log(app.tareas);
console.log(app.getTareasCompletadas());