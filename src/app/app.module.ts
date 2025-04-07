import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './components/componentes.module';
import { FilaService } from './service/fila.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule
  ],
  providers: [FilaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
