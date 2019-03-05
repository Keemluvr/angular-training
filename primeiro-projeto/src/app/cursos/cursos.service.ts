import { Injectable } from '@angular/core';

//Decorator de um serviço
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular']
  }

}
