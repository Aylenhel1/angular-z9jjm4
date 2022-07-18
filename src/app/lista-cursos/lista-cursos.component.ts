import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { __values } from 'tslib';
import { FormCursosComponent } from '../form-cursos/form-cursos.component';



@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})


export class ListaCursosComponent implements OnInit {

  listaCursos:Curso[]=[
    new Curso ('idiomas','Ingles','02/05/2022','06/09/2023','60'),
    {nombre:' ',descripcion:' ',fechaDesde:' ',fechaHasta:' ',capacidad:' '},
    {nombre:' ',descripcion:' ',fechaDesde:' ',fechaHasta:' ',capacidad:' '}
  ];
FormCursosComponent: any;
  constructor() {
    
}

ngOnInit(): void {
}
agregarCurso(){

  const curso:any={
   nombre:this.FormCursosComponent.form.get ('nombre')?.value,
   descripcion:this.FormCursosComponent.form.get ('descripcion')?.value,
   fechaDesde:this.FormCursosComponent.form.get ('fechaDesde')?.value,
   fechaHasta:this.FormCursosComponent.form.get ('fechaHasta')?.value,
   capacidad:this.FormCursosComponent.form.get ('capacidad')?.value,

  }
   this.listaCursos.push(curso)
   this.FormCursosComponent.form.reset();       
}

  eliminarCurso(index:number) {
 this.listaCursos.splice(index,1);
}



}