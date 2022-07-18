export class Curso {
  public nombre: string;
  public descripcion: string;
  public fechaDesde: string;
  public fechaHasta: string;
  public capacidad: string;

  constructor(
    nombre: string,
    descripcion: string,
    fechaDesde: string,
    fechaHasta: string,
    capacidad: string
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaDesde = fechaDesde;
    this.fechaHasta = fechaHasta;
    this.capacidad = capacidad;
  }
}
