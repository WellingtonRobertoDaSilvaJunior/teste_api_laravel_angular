import { Component, OnInit, Injectable } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {

  pessoa: Pessoa;
  pessoas: Pessoa[];

  constructor(private router: Router, private pessoaService: PessoaService) {}

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getPessoas().subscribe(resp => {
      this.pessoas = resp;
    }, err => {
      alert(err.status + '\n' + err.statusText);
    });
  }

  deletePessoa(pessoa: Pessoa) {
    this.pessoaService.deletePessoa(pessoa.Id).subscribe(resp => {
      this.pessoas = this.pessoas.filter(u => u !== pessoa);
      alert('Sucesso ao deletar!');
    }, err => {
      alert(err.status + '\n' + err.statusText);
    });
  }

  addPessoa(): void {
    localStorage.removeItem("editPessoaId");
    this.router.navigate(['pessoacrud']);
  };

  editPessoa(pessoa: Pessoa): void {
    localStorage.removeItem("editPessoaId");
    localStorage.setItem("editPessoaId", pessoa.Id.toString());
    this.router.navigate(['pessoacrud']);
  };
}
