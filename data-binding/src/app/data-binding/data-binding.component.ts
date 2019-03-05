import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  

  url: string = 'https://loiane.training.com'
  cursoAngular: boolean = true
  urlImagem: string = 'http://lorempixel.com/output/cats-q-g-640-480-6.jpg'

  constructor() { }

  ngOnInit(): void { }
    
  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }



}
