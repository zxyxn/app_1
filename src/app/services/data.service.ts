import { Injectable } from '@angular/core';
import { Enfermedades } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }
  getInformacionEnfermedades(){
    return this.http.get<Enfermedades>('/assets/data/data.json');
  }
}
