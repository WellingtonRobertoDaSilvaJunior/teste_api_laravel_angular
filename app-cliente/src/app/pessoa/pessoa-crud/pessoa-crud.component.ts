import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-crud',
  templateUrl: './pessoa-crud.component.html',
  styleUrls: ['./pessoa-crud.component.css']
})

export class PessoaCrudComponent implements OnInit {

  private pessoaForm: FormGroup;
  public titulo: string = null;
  private pessoaId: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.pessoaForm = this.formBuilder.group({
      Id: ['', Validators.required],
      Nome: ['', Validators.required],
      Telefone: ['', Validators.required],
      CPF: ['', Validators.required]
    });

    this.pessoaId = localStorage.getItem("editPessoaId");
    this.titulo = "Cadastrar Pessoa";
    if (this.pessoaId) {
      this.pessoaService.getPessoaById(+this.pessoaId)
        .subscribe(data => {
          this.pessoaForm.setValue(data);
        }
      );
      this.titulo = "Alterar Pessoa";
    }
  }

  onSubmit() {
    if (!this.pessoaForm.value.Id) {
      this.pessoaService.createPessoa(this.pessoaForm.value).subscribe(
        data => {
          alert('Sucesso ao cadastrar!');
          this.router.navigate(['home']);
        }, err => {
          alert(err.status + '\n' + err.statusText);
        }
      );
    } else {
      this.pessoaService.updatePessoa(this.pessoaForm.value)
        .subscribe(
          data => {
            alert('Sucesso ao alterar!');
            this.router.navigate(['home']);
          },
          err => {
            alert(err.status + '\n' + err.statusText);
          }
        );
    }
  }

  cancelar() {
    localStorage.removeItem("editPessoaId");
    this.router.navigate(['home']);
  }
  
  editMatriculas(): void {
    localStorage.removeItem("editPessoaId");
    localStorage.setItem("editPessoaId", this.pessoaId.toString());
    this.router.navigate(['pessoacurso']);
  };
}
