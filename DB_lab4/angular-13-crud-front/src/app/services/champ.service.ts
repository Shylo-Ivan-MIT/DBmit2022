import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Champ } from '../models/champ.model';

const baseUrl = 'http://localhost:8080/api/champs';

@Injectable({
  providedIn: 'root'
})
export class ChampService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Champ[]> {
    return this.http.get<Champ[]>(baseUrl);
  }

  get(id: any): Observable<Champ> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(full_name: any): Observable<Champ[]> {
    return this.http.get<Champ[]>(`${baseUrl}?full_name=${full_name}`);
  }
}
