import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bewerbung } from './bewerbung';

@Injectable({
  providedIn: 'root'
})
export class BewerbungService {
  private apiUrl = '/api/firma';

  constructor(private httpClient: HttpClient) { }

  getAll(firmaId: string): Observable<Bewerbung[]> {
    return this.httpClient.get<Bewerbung[]>(this.apiUrl + "/" + firmaId + "/" + "bewerbung");
  }

  get(firmaId: string, bewerbungId: string): Observable<Bewerbung> {
    return this.httpClient.get<Bewerbung>(this.apiUrl + "/" + firmaId + "/" + "bewerbung" + "/" + bewerbungId);
  }

  create(firmaId: string, bewerbung: Bewerbung): Observable<Bewerbung> {
    return this.httpClient.post<Bewerbung>(this.apiUrl + "/" + firmaId + "/" + "bewerbung", bewerbung);
  }

  update(firmaId: string, bewerbung: Bewerbung): Observable<Bewerbung> {
    const observableFirma: Observable<Bewerbung> = this.httpClient.put<Bewerbung>(this.apiUrl + "/" + firmaId + "/" + "bewerbung" + "/" + bewerbung.id, bewerbung);
    observableFirma.subscribe(error => console.log('Fehler: ' + error));
    return observableFirma;
  }

  delete(firmaId: string, bewerbungId: string): Observable<unknown> {
    return this.httpClient.delete(this.apiUrl + "/" + firmaId + "/" + "bewerbung" + "/" + bewerbungId);
  }
}
