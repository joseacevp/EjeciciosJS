export class Tarea {
    constructor( nombre, estado) {
        this.id = self.crypto.randomUUID();
        this.nombre = nombre;
        this.estado = estado;
    }
}
