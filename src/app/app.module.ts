import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
