import { Component, OnInit } from '@angular/core';
import { ListaCancionesService } from "../services/lista-canciones.service"

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.page.html',
  styleUrls: ['./lista-canciones.page.scss'],
})
export class ListaCancionesPage implements OnInit {

  constructor(public listaCancionesService: ListaCancionesService) { }
  public buscarVal: String="";
  ngOnInit() {
   this.listaCancionesService.load();
  }
  getItems($event){
    console.log("voy a buscar");
    if(this.buscarVal!==""){
      this.listaCancionesService.loadSearch(this.buscarVal);
    }
    
  }
}
