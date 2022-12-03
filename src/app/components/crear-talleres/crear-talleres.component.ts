import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Taller } from 'src/app/Models/taller';

@Component({
  selector: 'app-crear-talleres',
  templateUrl: './crear-talleres.component.html',
  styleUrls: ['./crear-talleres.component.css']
})
export class CrearTalleresComponent implements OnInit {
  tallerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService
    ) {

    this.tallerForm = this.fb.group({
      taller: ['', Validators.required],
      instructor: ['', Validators.required],
      ubicacion: ['', Validators.required],
      hora: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  agregarTaller(){
    console.log(this.tallerForm)
    console.log(this.tallerForm.get('taller')?.value);

    const TALLER: Taller ={
      nombre:this.tallerForm.get('taller')?.value,
      instructor:this.tallerForm.get('instructor')?.value,
      ubicacion:this.tallerForm.get('ubicacion')?.value,
      hora:this.tallerForm.get('hora')?.value,

    }
    console.log(TALLER);
    this.toastr.success('El taller fue registrado con éxito', 'Taller registrado');
    this.router.navigate(['/']);
  }

}
