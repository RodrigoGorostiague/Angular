import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Clase } from './class-list/clase';

@Injectable({
  providedIn: 'root'
})
export class InteresService {


  private _listaInteres: Clase[]=[];
  listaInteres:BehaviorSubject<Clase[]> = new BehaviorSubject(this._listaInteres);

  constructor() { }

  addToInteres(clase: Clase) {
    let item = this._listaInteres.find((v1)=>v1.descripcion==clase.descripcion);
    if(!item){
      this._listaInteres.push({...clase});
      clase.visto=true;
    }
    else{
      alert("La clase ya esta en tu lista");
    }
    this.listaInteres.next(this._listaInteres);
  }
  deleteToInteres(clase: Clase){
    let id = this._listaInteres.find((v1)=>v1.id==clase.id);

      this._listaInteres.pop;
      this.listaInteres.next(this._listaInteres);

  }

}
