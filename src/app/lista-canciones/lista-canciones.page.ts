import { Component, OnInit } from '@angular/core';
import { ListaCancionesService } from "../services/lista-canciones.service"

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.page.html',
  styleUrls: ['./lista-canciones.page.scss'],
})
export class ListaCancionesPage implements OnInit {

  constructor(public listaCancionesService: ListaCancionesService) { }

  ngOnInit() {
   this.listaCancionesService.load();
  }

}
