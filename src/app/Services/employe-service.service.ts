import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../Frontend/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {
  private apiURL = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/employes";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employe[]> {
    return this.httpClient.get<Employe[]>(this.apiURL)

  }
  create(employe): Observable<Employe> {
    return this.httpClient.post<Employe>(this.apiURL, employe)
  }
  update(id, employe): Observable<Employe> {
    return this.httpClient.put<Employe>(this.apiURL + '/' + id, employe)
  }

  Delete(id) {
    return this.httpClient.delete(this.apiURL + '/' + id)
  }

  find(id): Observable<Employe[]> {
    return this.httpClient.get<Employe[]>(this.apiURL + '/' + id)
  }
}
