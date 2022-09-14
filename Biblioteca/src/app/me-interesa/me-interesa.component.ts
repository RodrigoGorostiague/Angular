import { Component, OnInit } from '@angular/core';
import { InteresService } from '../interes.service';
import { Clase } from '../class-list/clase';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-me-interesa',
  templateUrl: './me-interesa.component.html',
  styleUrls: ['./me-interesa.component.css']
})
export class MeInteresaComponent implements OnInit {


  listInteres$!: Observable<Clase[]>;
  constructor(private interes: InteresService) {
    this.listInteres$ = interes.listaInteres.asObservable();
  }
  ngOnInit(): void {
  }
  addToInteres(clase: Clase): void{
    this.interes.addToInteres(clase);
  }
  deleteToInteres(clase: Clase): void{
    this.interes.deleteToInteres(clase);
  }
}
