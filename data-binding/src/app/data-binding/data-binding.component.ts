import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
  inputs: ['nomeCurso:nome']
})
export class DataBindingComponent implements OnInit {
  

  //data-binding
  url: string = 'https://loiane.training.com'
  cursoAngular: boolean = true
  urlImagem: string = 'http://lorempixel.com/output/cats-q-g-640-480-6.jpg'
  
  //event-binding
  valorAtual: string = ''
  valorSalvo: string = ''
  isMouseOver: boolean = false

  constructor() { }

  ngOnInit(): void { }

  nomeDoCurso: string = 'Angular'

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }


}
