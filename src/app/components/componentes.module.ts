import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { AdicionarJogadorComponent } from './modais/adicionar-jogador/adicionar-jogador.component';
import { FilaComponent } from './fila/fila.component';
import { TimeAtualComponent } from './time-atual/time-atual.component';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './modais/confirm/confirm.component';



@NgModule({
  declarations: [
    ConfiguracoesComponent,
    AdicionarJogadorComponent,
    FilaComponent,
    TimeAtualComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ConfiguracoesComponent,
    AdicionarJogadorComponent,
    FilaComponent,
    TimeAtualComponent,
    ConfirmComponent
  ]
})
export class ComponentesModule { }
