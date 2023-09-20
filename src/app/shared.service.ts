import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
//import { MeuDialogComponent } from './views/meu-dialog/meu-dialog.component'; // Importe a classe do diálogo

@Injectable({
  providedIn: 'root'
})

export class SharedService {
// Crie um Subject para emitir eventos quando o menu deve ser aberto
private menuOpenSubject = new Subject<void>();

// Observable que os componentes podem se inscrever para saber quando abrir o menu
menuOpen$ = this.menuOpenSubject.asObservable();

  constructor(private router: Router,  private route: ActivatedRoute, public dialog: MatDialog) { }
  redirectHome():void{
    this.router.navigate([''], {relativeTo: this.route});
  }
  redirectLogin():void{
    this.router.navigate(['login'], {relativeTo: this.route});
  }
  toggleMenu():void{
    this.menuOpenSubject.next();// Abre o menu ao clicar no ícone do menu
  }
  openDialog(message: string): void {

  }

}
