import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {
  private UrlApi: String = "https://itunes.apple.com/search?";
  loadSearch(buscar: String) {
    console.log("loadSearch", buscar);
    let llamada = this.UrlApi + "term=" + buscar + "&entity=musicVideo"
    this.http.get(llamada).subscribe((data: any) => {
      this.canciones = data.results;
    });
   // throw new Error("Method not implemented.");
  }
  public canciones: any[];
  constructor(private http: HttpClient) { }

    load() {
      this.http.get("assets/lista-canciones.json").subscribe((data: any) => {
        this.canciones = data.results;
      });
    }
}
