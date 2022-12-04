import { Component, OnInit } from '@angular/core';
import { Taller } from 'src/app/Models/taller';
import { TallerService } from 'src/app/services/taller.service';

@Component({
  selector: 'app-listar-talleres',
  templateUrl: './listar-talleres.component.html',
  styleUrls: ['./listar-talleres.component.css']
})
export class ListarTalleresComponent implements OnInit {

  listTaller: Taller[] =[];

  constructor(private _tallerService: TallerService) { }

  ngOnInit(): void {
    this.obtenerTaller();
  }

obtenerTaller(){
  this._tallerService.getTaller().subscribe(data => {
    console.log(data);
    this.listTaller = data;

  }, error =>{
    console.log(error);
  })
}
elimiarTaller(id: any){
  this._tallerService.eliminarTaller(id).subscribe(data =>{
    alert('El taller fue eliminado con éxito');
  this.obtenerTaller();
  }, error =>{
    console.log(error);
  })
}
}
