import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedService } from 'src/app/shared.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from 'src/app/auth-service.service';
//import { MeuDialogComponent } from '../meu-dialog/meu-dialog.component'; // Certifique-se de usar o caminho correto

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome!: string;
  idade!: string;
  email!: string;
  usuario!: string;
  senha!: string;
  meuFormulario: any;
  formBuilder: any;
  constructor(private router: Router,
     private route: ActivatedRoute,
     private sharedService: SharedService,
     private dialog: MatDialog,
     private authService: AuthService
     ) {
  }
  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;
  ngOnInit(): void { }
 openDialog(message: string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message,
    });

 }
  // Função para lidar com o clique no botão de login
  fazerCadastro(): void {
    if (this.isValidForm() && this.medicoOUpaciente()) {
      // Realize a lógica de envio da requisição aqui
      console.log('Nome: ', this.nome);
      console.log('Idade: ', this.idade);
      console.log('Email: ', this.email);
      console.log('Usuário: ', this.usuario);
      console.log('Senha: ', this.senha);
      this.authService.addUser(this.usuario, this.senha);
    } else {
      this.openDialog("Preencha todos os campos e selecione a opção 'Paciente' ou 'Médico'");
    }
  }

  medicoOUpaciente(): boolean {
    const selectedRoleElement = document.querySelector('input[name="role"]:checked') as HTMLInputElement;
    if (selectedRoleElement) {
      const selectedRole = selectedRoleElement.value;
      console.log(selectedRole + ' selecionado');
      this.redirectLogin();
      return selectedRole === 'medico' || selectedRole === 'paciente';

    } else {
      console.log("Nenhuma opção selecionada");
      return false;
    }
  }
  isValidForm(): boolean {
    return !!this.nome && !!this.idade && !!this.email && !!this.usuario && !!this.senha;
  }
  redirectHome(): void {
    this.sharedService.redirectHome();
  }
  redirectLogin(): void {
this.sharedService.redirectLogin();
  }
  toggleMenu(): void {
    this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }
  redirect(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }



}
