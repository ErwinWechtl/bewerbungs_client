import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Firma } from './firma';


@Injectable({
  providedIn: 'root'
})
export class FirmaService {

  //private apiUrl = 'http://localhost:8080/api/firma';
  private apiUrl = '/api/firma';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Firma[]> {
    return this.httpClient.get<Firma[]>(this.apiUrl);
  }

  get(id: string): Observable<Firma> {
    return this.httpClient.get<Firma>(this.apiUrl + "/" + id);
  }

  create(firma: Firma): Observable<Firma> {
    return this.httpClient.post<Firma>(this.apiUrl, firma);
  }

  update(firma: Firma): Observable<Firma> {
    const observableFirma: Observable<Firma> = this.httpClient.put<Firma>(this.apiUrl + "/" + firma.id, firma);
    observableFirma.subscribe(error => console.log('Fehler: ' + error));
    return observableFirma;
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete(this.apiUrl + "/" + id);
  }

}