import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DialogArComponent } from './dialog-ar/dialog-ar.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'articles', component: ArticlesComponent }, 
  { path: 'dialoga' , component: DialogArComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //default
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
