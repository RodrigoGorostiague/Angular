import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBibliotecaComponent } from "../app/home-biblioteca/home-biblioteca.component";
import { AboutBibliotecaComponent } from "../app/about-biblioteca/about-biblioteca.component";

const routes: Routes = [
    {path: '', redirectTo: 'biblioteca', pathMatch:'full'},
    {path: 'biblioteca',component: HomeBibliotecaComponent},
    {path: 'about',component: AboutBibliotecaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
