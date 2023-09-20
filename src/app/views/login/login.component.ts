import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario!: string ; // Iniciaslize as propriedades
  senha!: string ;
  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;

  constructor(private router: Router, private dialog: MatDialog, private route: ActivatedRoute, private sharedService: SharedService, private authService: AuthService) {}
  ngOnInit(): void {}
  openDialog(message: string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message,
    });

 }
  // Função para lidar com o clique no botão de login
  fazerLogin(): void {
      const usernames = this.authService.getUsernames();
      const passwords = this.authService.getPasswords();

      const enteredUsername = this.usuario;
      const enteredPassword = this.senha;

      const userIndex = usernames.indexOf(enteredUsername);

      if (userIndex !== -1 && passwords[userIndex] === enteredPassword) {
        // Credenciais válidas, o usuário está logado com sucesso
        console.log('Login bem-sucedido');

        // Redirecione ou execute outras ações após o login
      } else {
        // Credenciais inválidas, exiba uma mensagem de erro ou tome a ação apropriada
        console.log('Credenciais inválidas');
        this.openDialog("Usuario e senha Invalidos");

      }
    }
  toggleMenu():void{
    this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }
  redirectHome(){
    this.sharedService.redirectHome();
  }
  redirect(): void{
      this.router.navigate(['cadastro'], {relativeTo: this.route});
  }
}
