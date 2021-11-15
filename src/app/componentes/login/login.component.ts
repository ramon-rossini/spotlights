import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      senha:['', Validators.required]
    })
  }

  login(){
    this.http.get<any>(environment.apiUsu).subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      });
      if(user){
        this.toast.success('O login foi executado com êxito', 'Login Efetuado!');
        this.loginForm.reset();
        this.router.navigate(['inicio'])
      } else{
        this.toast.info('O usuário informado não foi encontrado', 'Usuário Inexistente!');
      }
    }, err=> {
      this.toast.error('Ocorreu algum erro ao efetuar o login', 'ERROR');
    })
  }

}
