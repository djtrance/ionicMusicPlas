import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {
  public canciones: any[];
  constructor(private http: HttpClient) { }

    load() {
      this.http.get("lista-canciones.json").subscribe((data: any) => {
        this.canciones = data.results;
      });
    }
}
