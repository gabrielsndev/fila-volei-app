import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { AdicionarJogadorComponent } from './adicionar-jogador/adicionar-jogador.component';
import { FilaComponent } from './fila/fila.component';
import { TimeAtualComponent } from './time-atual/time-atual.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfiguracoesComponent,
    AdicionarJogadorComponent,
    FilaComponent,
    TimeAtualComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConfiguracoesComponent,
    AdicionarJogadorComponent,
    FilaComponent,
    TimeAtualComponent
  ]
})
export class ComponentesModule { }
