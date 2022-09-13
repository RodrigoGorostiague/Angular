import { Component, OnInit } from '@angular/core';
import { InteresService } from '../interes.service';
import { Clase } from '../class-list/clase';

@Component({
  selector: 'app-me-interesa',
  templateUrl: './me-interesa.component.html',
  styleUrls: ['./me-interesa.component.css']
})
export class MeInteresaComponent implements OnInit {


  listInteres: Clase[] = [];
  constructor(private interes: InteresService) {
    interes.listaInteres.subscribe(o => this.listInteres = o);
  }
  ngOnInit(): void {
  }
  addToInteres(clase: Clase): void{
    this.interes.addToInteres(clase);


  }
}
