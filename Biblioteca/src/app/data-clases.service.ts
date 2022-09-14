import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Clase } from './class-list/clase';

const URL = "https://6321169482f8687273ac9b45.mockapi.io/Clases";

@Injectable({
  providedIn: 'root'
})
export class DataClasesService {

  constructor(private http: HttpClient) { }

public getAll(): Observable<Clase[]>{
 return this.http.get<Clase[]>(URL);
}

}
