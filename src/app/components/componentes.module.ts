import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { AdicionarJogadorComponent } from './modais/adicionar-jogador/adicionar-jogador.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { TimeAtualComponent } from './time-atual/time-atual.component';
import { ConfirmComponent } from './modais/confirm/confirm.component';
import { FilaComponent } from './fila/fila.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { JogadorIndividualComponent } from './modais/jogador-individual/jogador-individual.component';



@NgModule({
  declarations: [
    ConfiguracoesComponent,
    AdicionarJogadorComponent,
    FilaComponent,
    TimeAtualComponent,
    ConfirmComponent,
    JogadorIndividualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule
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
