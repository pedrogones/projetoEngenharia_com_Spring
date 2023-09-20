import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;
  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService){

  }

  ngOnInit(): void {

  }

  redirectHome(){
    this.sharedService.redirectHome();
  }
  toggleMenu() {
   // this.sharedService.toggleMenu();// Abre o menu ao clicar no ícone do menu
   this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }

  redirect():void{
      this.router.navigate(['login'], {relativeTo: this.route});
  }

}
