import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { CriarConteudoComponent } from './componentes/criar-conteudo/criar-conteudo.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { ListarConteudoComponent } from './componentes/listar-conteudo/listar-conteudo.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'inicio', component:HeaderComponent, children: [
    {path:'', redirectTo:'conteudo', pathMatch:'full'},
    {path:'conteudo', component:HomepageComponent},
    {path:'perfil', component:PerfilComponent},
  ] },
  {path:'listar-conteudo', component:ListarConteudoComponent},
  {path:'criar-conteudo', component:CriarConteudoComponent},
  {path:'editar-conteudo/:id', component:CriarConteudoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
