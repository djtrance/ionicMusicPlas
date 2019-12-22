import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCancionesPage } from './lista-canciones.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ListaCancionesService } from '../services/lista-canciones.service';

describe('ListaCancionesPage', () => {
  let component: ListaCancionesPage;
  let fixture: ComponentFixture<ListaCancionesPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCancionesPage ],
      imports: [IonicModule.forRoot()],
      providers: [ListaCancionesService],
      //schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

   // fixture = TestBed.createComponent(ListaCancionesPage);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCancionesPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });

  it("is display the list of songs", () => {

    let listaService = fixture.debugElement.injector.get(ListaCancionesService);
    let firstSong = listaService.canciones[0]; 
  

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-list ion-item"));
    el = de.nativeElement;

    expect(el.textContent).toContain(firstSong.collectionName);
    expect(el.textContent).toContain(firstSong.artistName);
    expect(el.textContent).toContain(firstSong.trackName);
    /*expect(el.textContent).toContain(firstSong.artistViewUrl);
    expect(el.textContent).toContain(firstSong.previewUrl);
    expect(el.textContent).toContain(firstSong.artworkUrl100);
    expect(el.textContent).toContain(firstSong.shortDescription);
    */
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
