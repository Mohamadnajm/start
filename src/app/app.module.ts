import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
// import { PrimeNGConfig } from 'primeng/api';
// import { PrimeIcons } from 'primeng/api';
// import { style } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent, 
    ArticlesComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    
    ],
  providers: [],
  bootstrap: [
    AppComponent],
}) 
export class AppModule {}
