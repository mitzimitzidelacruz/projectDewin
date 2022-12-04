
export class Taller{
    _id?: number;
    nombre: string;
    instructor: string;
    ubicacion: string;
    hora: number;


constructor(nombre: string, instructor: string, ubicacion: string, hora: number) {
    this.nombre = nombre;
    this.instructor = instructor;
    this.ubicacion = ubicacion;
    this.hora = hora;

}}