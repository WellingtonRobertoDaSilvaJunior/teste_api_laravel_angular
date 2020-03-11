import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/pessoa';

  getPessoas() {
    return this.http.get<Pessoa[]>(this.baseUrl);
  }

  getPessoaById(Id: number) {
    return this.http.get<Pessoa>(this.baseUrl + '/' + Id);
  }

  createPessoa(pessoa: Pessoa) {
    return this.http.post(this.baseUrl, pessoa);
  }

  updatePessoa(pessoa: Pessoa) {
    return this.http.put(this.baseUrl + '/' + pessoa.Id, pessoa);
  }

  deletePessoa(Id: number) {
    return this.http.delete(this.baseUrl + '/' + Id);
  }
}