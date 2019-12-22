import { TestBed } from '@angular/core/testing';

import { ListaCancionesService } from './lista-canciones.service';

describe('ListaCancionesService', () => {
  let listaCancionesService;

  beforeEach(() => {
    listaCancionesService = new ListaCancionesService();
  });
  afterEach(() => {
    listaCancionesService= null;
  });
  //beforeEach(() => TestBed.configureTestingModule({}));

  it("should have a non empty array called products", () => {
    let products = listaCancionesService.canciones;

    expect(Array.isArray(canciones)).toBeTruthy();
    expect(canciones.length).toBeGreaterThan(0);
  });
  /*
  it('should be created', () => {
    const service: ListaCancionesService = TestBed.get(ListaCancionesService);
    expect(service).toBeTruthy();
  });*/
});
