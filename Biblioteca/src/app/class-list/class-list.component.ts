import { Component, OnInit } from '@angular/core';
import { InteresService } from '../interes.service';
import { Clase } from "./clase";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  clases: Clase[] = [
    {
    tema: 'Angular',
    descripcion: 'Introducion',
    video: 'https://www.youtube.com/watch?v=iGNoi8is3vk',
    slide: 'https://docs.google.com/presentation/d/1_Zm9ZlUYcz9kNVSzgtaryKhXnuSWzvyO3RVe3QEK2ks/edit#slide=id.p',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

    {
    tema: 'Angular',
    descripcion: 'Componentes',
    video: 'https://www.youtube.com/watch?v=fO74AMjx2fk',
    slide: 'https://docs.google.com/presentation/d/1_xREpDIHOWvecO9xsAz7WrA1FQJ04CFitg-0xacF3fw/edit#slide=id.p',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

    {
    tema: 'Angular',
    descripcion: 'Interfaces y Directivas',
    video: 'https://www.youtube.com/watch?v=aFXH_DvuVeQ',
    slide: 'https://docs.google.com/presentation/d/1DlRPM_a9rex1cee7DjNaF5GO0hS-tU1sptKN_I2h57g/edit#slide=id.g92eb4243ca_0_0',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

    {
    tema: 'Angular',
    descripcion: 'Eventos & Binding',
    video: 'https://www.youtube.com/watch?v=vSLhBJbZtYQ',
    slide: 'https://docs.google.com/presentation/d/1_Zm9ZlUYcz9kNVSzgtaryKhXnuSWzvyO3RVe3QEK2ks/edit#slide=id.p',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

    {
    tema: 'Angular',
    descripcion: 'Ruteo',
    video: 'https://www.youtube.com/watch?v=TNJEFvPuVjY',
    slide: 'https://docs.google.com/presentation/d/10u4OlxhFj-4SqLKXfFeBJvKdf5KN2tr0pCtFK5euDVA/edit#slide=id.p',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },
    {
    tema: 'Angular',
    descripcion: 'Comunicaion entre componentes',
    video: 'https://www.youtube.com/watch?v=nq1U_fVR1sw',
    slide: 'https://docs.google.com/presentation/d/1g__35jk7ggIlUvdAl5rWAEo5Ktyznhx6u-bo3d-Lb98/edit#slide=id.p',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

    {
    tema: 'Angular',
    descripcion: 'Comunicaion entre componentes pt2.',
    video: 'https://www.youtube.com/watch?v=h7u-33BDgwA',
    slide: 'https://docs.google.com/presentation/d/1qkRcDKGSy13aoRIlwgL9eYQmYMIjKOvO1mhCjSaT3OE/edit#slide=id.ga458e509f9_0_318',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

    {
    tema: 'Angular',
    descripcion: 'HTTP Client',
    video: 'https://www.youtube.com/watch?v=pmKK80MvGyE',
    slide: 'https://docs.google.com/presentation/d/1Usq3x5qATNe0rtTg1E9h20TWDGLfuOwa79rUWgAw6Q0/edit#slide=id.ga3826fd68b_0_0',
    images: 'assets/images/angular.png',
    visto: false,
    like:0,
    },

  ];

  constructor(private interes: InteresService) {
   }

  ngOnInit(): void {
  }
  addToInteres(clase: Clase): void{
    this.interes.addToInteres(clase);
    console.log(clase);
  }

}
