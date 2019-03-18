import { Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef


  constructor() { }

  ngOnInit() {
  }

  incrementa(){ 
    console.log(this.campoValorInput)
    this.campoValorInput.nativeElement.valor++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.campoValorInput.nativeElement.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }

}
