import { TimeAtualService } from '../../../service/time-atual.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FilaService } from '../../../service/fila.service';
import { Component, inject, Inject } from '@angular/core';


@Component({
  selector: 'app-jogador-individual',
  standalone: false,
  templateUrl: './jogador-individual.component.html',
  styleUrl: './jogador-individual.component.css'
})
export class JogadorIndividualComponent {

  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      time:boolean
    },
    private filaService: FilaService,
    private timesAtuais: TimeAtualService) {};

  fila: string[] = [];
  dialogRef = inject(DialogRef, { optional: true });

  addPlayer(jogador: string) {
    this.timesAtuais.addSinglePlayer(jogador, this.data.time);
    this.filaService.removerJogador(jogador);
    this.dialogRef?.close();
  }

  ngOnInit(): void {
  this.filaService.fila$.subscribe(fila => {
    this.fila = fila;
  });
}

}
