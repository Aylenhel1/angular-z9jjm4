import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { __values } from 'tslib'

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css']
})
export class FormCursosComponent /*implements OnInit*/ {

  /* listaCursos:Curso[]=[
    new Curso ('idiomas','Ingles','02/05/2022','06/09/2023','60'),
    {nombre:' ',descripcion:' ',fechaDesde:' ',fechaHasta:' ',capacidad:' '},
    {nombre:' ',descripcion:' ',fechaDesde:' ',fechaHasta:' ',capacidad:' '}
  ];

  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      nombre:['', Validators.required,Validators.maxLength(20)],
      descripcion:['',Validators.required,Validators.maxLength(50)],
      fechaDesde:['',Validators.required,Validators.maxLength(10)],
      fechaHasta:['',Validators.required,Validators.maxLength(10),Validators.minLength(8)],
      capacidad:['',Validators.required,Validators.maxLength(9)],
     
})
}

ngOnInit(): void {
}
agregarCurso(){

  const curso:any={
   nombre:this.form.get ('nombre')?.value,
   descripcion:this.form.get ('descripcion')?.value,
   fechaDesde:this.form.get ('fechaDesde')?.value,
   fechaHasta:this.form.get ('fechaHasta')?.value,
   capacidad:this.form.get ('capacidad')?.value,

  }
   this.listaCursos.push(curso)
   this.form.reset();       
}

  eliminarCurso(index:number) {
 this.listaCursos.splice(index,1);
}*/



}

  