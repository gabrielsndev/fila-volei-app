import { Component, inject, Optional } from '@angular/core';
import { FilaService } from '../../../service/fila.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-adicionar-jogador',
  standalone: false,
  templateUrl: './adicionar-jogador.component.html',
  styleUrl: './adicionar-jogador.component.css'
})
export class AdicionarJogadorComponent {

  constructor(private filaService: FilaService) {}
  fila: string[] = [];

  ngOnInit(): void {
    this.filaService.fila$.subscribe(fila => {
      this.fila = fila;
    });
  }

dialogRef = inject(DialogRef, {optional: true})

  adicionarJogador(jogador: string){
    console.log(jogador)
    this.filaService.adicionarJogador(jogador)
    this.dialogRef?.close()
  }


}
