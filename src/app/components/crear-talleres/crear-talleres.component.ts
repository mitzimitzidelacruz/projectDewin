import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Taller } from 'src/app/Models/taller';
import { TallerService } from 'src/app/services/taller.service';

@Component({
  selector: 'app-crear-talleres',
  templateUrl: './crear-talleres.component.html',
  styleUrls: ['./crear-talleres.component.css']
})
export class CrearTalleresComponent implements OnInit {
  tallerForm: FormGroup;
  titulo = 'Crear Taller';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _tallerService: TallerService,
              private aRouter: ActivatedRoute) {

    this.tallerForm = this.fb.group({
      taller: ['', Validators.required],
      instructor: ['', Validators.required],
      ubicacion: ['', Validators.required],
      hora: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarTaller(){

    const TALLER: Taller ={
      nombre:this.tallerForm.get('taller')?.value,
    instructor:this.tallerForm.get('instructor')?.value,
      ubicacion:this.tallerForm.get('ubicacion')?.value,
      hora:this.tallerForm.get('hora')?.value,

    }

    if(this.id !==null){
      //editamos el taller

      this._tallerService.editarTaller(this.id, TALLER).subscribe(data =>{
        alert('El taller fue actualizado con éxito');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tallerForm.reset();
      })

    }else{
      //agregamos taller
      console.log(TALLER);
      this._tallerService.guardarTaller(TALLER).subscribe(data =>{
        alert('El taller fue añadido con éxito');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tallerForm.reset();
      })
    }

  }
  esEditar() {

    if(this.id !== null){
      this.titulo = 'Editar taller';
      this._tallerService.obtenerTaller(this.id).subscribe(data =>{
        this.tallerForm.setValue({
      taller: data.nombre,
      instructor: data.instructor,
      ubicacion: data.ubicacion,
      hora: data.hora,
        })
      })
    }
  }
}
