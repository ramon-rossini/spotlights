import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  lista: Usuario[] = [];

  myForm!: FormGroup //Formulário de cadastro

  constructor(private _usuarioService: UsuarioService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.obterUsuarios();
  }

  obterUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.lista = data;
      console.log(data);
    })
  }

}