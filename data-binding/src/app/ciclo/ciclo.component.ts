import { 
  Component, 
  OnInit, 
  OnChanges, 
  OnDestroy, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked,
  AfterViewInit, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked {

  @Input() valorInicial: number =10;

  constructor() { 
    console.log('construtor')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngDoCheck() {
    this.log('ngOnCheck')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked')
  }

  private log(hook: string) {
    console.log(hook)
  }

}
