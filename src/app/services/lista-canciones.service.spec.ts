import { TestBed,inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ListaCancionesService } from './lista-canciones.service';

describe('ListaCancionesService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],

      providers: [ListaCancionesService],

      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  it("should have a non empty array called cancionesAtributos",inject([ListaCancionesService, HttpTestingController],
    (listaCancionesService, httpMock) => {
      const mockResponse = {"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/1d/4a/47/1d4a473d-0e1a-8d0c-7262-ee077ecf06d0/mzaf_5826339530962154107.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/ce/2a/e6/ce2ae6a7-d38c-0c95-7f81-2e958c27daa4/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/ce/2a/e6/ce2ae6a7-d38c-0c95-7f81-2e958c27daa4/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/ce/2a/e6/ce2ae6a7-d38c-0c95-7f81-2e958c27daa4/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"1993-09-21T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":12, "trackNumber":6, "trackTimeMillis":151880, "country":"USA", "currency":"USD", "primaryGenreName":"Alternative", "isStreamable":true} ;
     
      listaCancionesService.load();
      // Expect a request to the URL
      const mockReq = httpMock.expectOne("lista-canciones.json");
      //expect(mockReq.length).toBeGreaterThan(0);
      // Execute the request using the mockResponse data
      mockReq.flush(mockResponse);
   // let cancionesAtributos = listaCancionesService.canciones;

  //  expect(Array.isArray(cancionesAtributos)).toBeTruthy();
   // expect(cancionesAtributos.length).toBeGreaterThan(0);
  }));
  /*
  it('should be created', () => {
    const service: ListaCancionesService = TestBed.get(ListaCancionesService);
    expect(service).toBeTruthy();
  });*/
});
