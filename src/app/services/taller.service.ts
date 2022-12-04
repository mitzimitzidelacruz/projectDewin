import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taller } from '../Models/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  url = 'http://localhost:3000/api/talleres/taller/638adee7f1227ed5caf59ad8/';

  constructor(private http: HttpClient) { }

  getTaller(): Observable<any> {
    return this.http.get(this.url);
  }
  eliminarTaller(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarTaller(taller: Taller): Observable<any>{
    return this.http.post(this.url, taller);
  }

  obtenerTaller(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarTaller(id: string, taller: Taller): Observable<any>{
    return this.http.put(this.url +id, taller);
  }
}
