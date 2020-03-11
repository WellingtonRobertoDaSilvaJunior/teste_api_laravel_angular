
import { Component, OnInit, Injectable } from '@angular/core';
import { PessoaCursoService } from './pessoa-curso.service';
import { PessoaCurso } from './pessoa-curso';
import { Router } from '@angular/router';
import { Curso } from '../curso/curso';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-pessoa-curso',
  templateUrl: './pessoa-curso.component.html',
  styleUrls: ['./pessoa-curso.component.css']
})

export class PessoaCursoComponent implements OnInit {

  pessoaCurso: PessoaCurso;
  pessoaCursos: PessoaCurso[];
  curso: Curso;
  cursos: Curso[];
  private pessoaId: any = null;

  constructor(
    private router: Router,
    private pessoaCursoService: PessoaCursoService,
    private cursoService: CursoService
  ) {}

  ngOnInit() {
    this.pessoaId = localStorage.getItem("editPessoaId");
    if (this.pessoaId) {
      this.pessoaCursoService.getPessoaCursoById(+this.pessoaId).subscribe(resp => {
        this.pessoaCursos = resp;
        this.cursoService.getCursos().subscribe(resp => {
          this.cursos = resp;
          this.cursos.forEach(curso => {
            this.pessoaCursos.forEach(pessoaCurso => {
              if(curso.Id == pessoaCurso.CdCursoId){
                curso.Matricula = pessoaCurso.Matricula;
              }
            });
          });
        }, err => {
          alert(err.status + '\n' + err.statusText);
        });
      }, err => {
        alert(err.status + '\n' + err.statusText);
      });
    }
  }

  matricular(curso: Curso){
    this.pessoaCurso = Object.assign({}, new PessoaCurso());
    this.pessoaCurso.CdPessoaId = this.pessoaId;
    this.pessoaCurso.CdCursoId = curso.Id;
    this.pessoaCursoService.createPessoaCurso(this.pessoaCurso).subscribe(
      data => {
        alert('Sucesso ao cadastrar!');
        this.router.navigate(['home']);
      }, err => {
        alert(err.status + '\n' + err.statusText);
      }
    );
  }

  finalizar(pessoaCurso: PessoaCurso) {
    this.pessoaCursoService.deletePessoaCurso(pessoaCurso.Matricula).subscribe(resp => {
      this.pessoaCursos = this.pessoaCursos.filter(u => u !== pessoaCurso);
      alert('Sucesso ao deletar!');
      this.router.navigate(['pessoacrud']);
    }, err => {
      alert(err.status + '\n' + err.statusText);
    });
  }

  cancelar() {
    localStorage.removeItem("editPessoaId");
    localStorage.setItem("editPessoaId", this.pessoaId.toString());
    this.router.navigate(['pessoacrud']);
  }
}
