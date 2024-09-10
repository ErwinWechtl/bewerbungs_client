import { Injectable } from '@angular/core';
import { Firma } from './firma';
import { Observable, from } from 'rxjs';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class FirmaFileService {

  firma1: Firma;
  firma2: Firma;
  firmaArray1: Firma[];
  firmaArray2: Firma[];
  firmaArrayGesamt: Firma[][];

  constructor(private fileService: FileService) {
    this.firma1 = {
      id: '1',
      name: 'Firma1',
      webseite: 'eine.firma.at',
      ansprechPartner: 'Erwin Wechtl',
      email: 'erwin.wechtl@gmx.at',
      sonstiges: 'Bla bla aut'
    };
    this.firma2 = {
      id: '2',
      name: 'Firma2',
      webseite: 'eine2.firma.at',
      ansprechPartner: 'Erwin Wechtl 2',
      email: 'erwin.2wechtl@gmx.at',
      sonstiges: 'Bla bla aut 2'  
    };
    this.firmaArray1 = [this.firma1];
    this.firmaArray2 = [this.firma2];
    this.firmaArrayGesamt = [this.firmaArray1, this.firmaArray1];
  }

  getAll(): Observable<Firma[]> {
    return from(this.firmaArrayGesamt);
  }

  get(id: string): Observable<Firma> {
    return from(this.firmaArray1);
  }

  create(firma: Firma): Observable<Firma> {
    this.fileService.createFirma(firma);
    return from(this.firmaArray1);
  }

  update(firma: Firma): Observable<Firma> {
    return from(this.firmaArray1);
  }

  delete(id: string): Observable<unknown> {
    return from(this.firmaArray1);
  }
}
