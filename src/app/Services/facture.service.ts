import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Frontend/facture/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiURL = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/factures";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facture[]> {
    return this.httpClient.get<Facture[]>(this.apiURL)

  }
  find(id): Observable<Facture[]> {
    return this.httpClient.get<Facture[]>(this.apiURL + '/' + id)
  }
}
