import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CD } from './cd-list/CD';

const URL = 'https://6660e05b63e6a0189fe7cb4c.mockapi.io/api/v1/CdList';

@Injectable({
  providedIn: 'root'
})
export class CdDataService {
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<CD[]> {
    return this.http.get<CD[]>(URL);
  }
}
