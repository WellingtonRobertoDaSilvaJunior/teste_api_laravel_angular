import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';

@Injectable()
export class CursoService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/curso';

  getCursos() {
    return this.http.get<Curso[]>(this.baseUrl);
  }
}