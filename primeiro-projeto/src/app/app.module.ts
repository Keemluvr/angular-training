import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

@NgModule({
  declarations: [ //Componentes, diretivas e pipes
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [], //Serviços
  bootstrap: [AppComponent]
})
export class AppModule { }
