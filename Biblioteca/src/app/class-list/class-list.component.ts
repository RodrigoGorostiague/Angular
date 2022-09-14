import { Component, OnInit } from '@angular/core';
import { DataClasesService } from '../data-clases.service';
import { InteresService } from '../interes.service';
import { Clase } from "./clase";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  clases: Clase[]= [];

  constructor(private interes: InteresService,
              private dataClaseService: DataClasesService) {

   }



  ngOnInit(): void {
    this.dataClaseService.getAll()
    .subscribe(data => this.clases = data);
  }
  addToInteres(clase: Clase): void{
    this.interes.addToInteres(clase);
    console.log(clase);
  }

}
