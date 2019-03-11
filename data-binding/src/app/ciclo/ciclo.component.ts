import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit {

  constructor() { 
    console.log('construtor')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngDoCheck() {
    console.log('ngOnCheck')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

  private log(hook: string) {
    console.log(hook)
  }

}
