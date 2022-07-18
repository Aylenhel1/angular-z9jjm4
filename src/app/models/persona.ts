export class Persona {
  public nombre: string ;
  public apellido: string;
  public tipo: string;
  public nroDocumento: string;
  public fechaNacimiento: string;
  public edad: string;
  public curso: string;
  
  constructor(nombre:string , apellido:string, tipo:string, nroDocumento:string,fechaNacimiento:string,edad:string,curso:string){
      this.nombre=nombre;
      this.apellido=apellido;
      this.tipo =tipo;
      this.nroDocumento=nroDocumento;
      this.fechaNacimiento=fechaNacimiento;
      this.edad=edad;
      this.curso=curso;
  }
  
  
  }