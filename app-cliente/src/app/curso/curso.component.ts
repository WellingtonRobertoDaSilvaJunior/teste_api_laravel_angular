import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Curso } from './curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {

  curso: Curso;
  cursos: Curso[];

  constructor(private router: Router, private cursoService: CursoService) {}

  ngOnInit() {
    this.getCurso();
  }

  getCurso() {
    this.cursoService.getCursos().subscribe(resp => {
      this.cursos = resp;
    }, err => {
      alert(err.status + '\n' + err.statusText);
    });
  }
}

