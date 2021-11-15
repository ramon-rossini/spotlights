import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {

    this.cadastroForm = this.formBuilder.group({
      nome:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      senha:['', Validators.required],
    })

  }

  cadastrar(){
    this.http.post<any>(environment.apiUsu, this.cadastroForm.value).subscribe(res=> {
      this.cadastroForm.reset();
      this.toast.success('O cadastro foi realizado com êxito', 'Usuário Cadastrado!');
      this.router.navigate(['login']);
    }, err => {
      this.toast.error('Ocorreu algum erro ao cadastrar o usuário', 'ERROR');
    })
  }

  /* VALIDACAO SENHA
  private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup
      const valueOfControlA = formGroup.get(controlNameA)?.value
      const valueOfControlB = formGroup.get(controlNameB)?.value
      
      if (valueOfControlA === valueOfControlB) {
        return null
      } else {
        return { valuesDoNotMatch: true }
      }
    }
  }
  */

}
