export class Taller{
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    horas: number;

constructor(nombre: string, categoria: string, ubicacion: string, horas: number) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.horas = horas;

  }}