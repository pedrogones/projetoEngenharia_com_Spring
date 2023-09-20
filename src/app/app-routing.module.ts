import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  //declaração da rotas, na rota raiz a gente abre o LoginCompponent
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/cadastro', component: CadastroComponent},
  {path: 'paciente', component: PacientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
