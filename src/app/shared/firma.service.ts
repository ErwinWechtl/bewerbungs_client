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

  get(id: String): Observable<Firma> {
    return this.httpClient.get<Firma>(this.apiUrl + "/" + id);
  }

  create(firma: Firma): Observable<Firma> {
    return this.httpClient.post<Firma>(this.apiUrl, firma);
  }

  update(firma: Firma): Observable<Firma> {
    return this.httpClient.put<Firma>(this.apiUrl + "/" + firma.id, firma);
  }

  delete(id: String): Observable<unknown> {
    return this.httpClient.delete(this.apiUrl + "/" + id);
  }

}