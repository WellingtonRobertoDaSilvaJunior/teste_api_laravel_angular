import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaCurso } from './pessoa-curso';

@Injectable()
export class PessoaCursoService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/pessoacurso';

  getPessoaCursoById(Id: number) {
    return this.http.get<PessoaCurso[]>(this.baseUrl + '/' + Id);
  }

  createPessoaCurso(params: any) {
    return this.http.post(this.baseUrl, params);
  }

  deletePessoaCurso(Matricula: number) {
    return this.http.delete(this.baseUrl + '/' + Matricula);
  }
}