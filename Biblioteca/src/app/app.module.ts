import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { MeInteresaComponent } from './me-interesa/me-interesa.component';
import { AboutBibliotecaComponent } from './about-biblioteca/about-biblioteca.component';
import { HomeBibliotecaComponent } from './home-biblioteca/home-biblioteca.component';
import { NumberLikesComponent } from './number-likes/number-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    MeInteresaComponent,
    AboutBibliotecaComponent,
    HomeBibliotecaComponent,
    NumberLikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
