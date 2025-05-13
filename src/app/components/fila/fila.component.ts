import { Component, inject } from '@angular/core';
import { FilaService } from '../../service/fila.service';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmComponent } from '../modais/confirm/confirm.component';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-fila',
  standalone: false,
  templateUrl: './fila.component.html',
  styleUrl: './fila.component.css'
})
export class FilaComponent {

  constructor(private filaService: FilaService, private configService: ConfigService) {}

  private dialog = inject(Dialog);

  protected openModal(jogador:string){
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      data: {message : "Excluir o Jogador da Fila",
             action: "delete",
             player : jogador
      }
    });
  }


  fila: string[] = [];
  maximoJogadores:number = 0;
  jogadoresSelecionados: string[] = [];


  ngOnInit(): void {
  this.filaService.fila$.subscribe(fila => {
    this.fila = fila;

    if (fila.length > 0) {
      const primeiro = fila[0];
      if (!this.jogadoresSelecionados.includes(primeiro)) {
        this.jogadoresSelecionados.unshift(primeiro);
      }
    }
  });

  this.configService.qtdJogadores$.subscribe(max => {
    this.maximoJogadores = max;
  });

  this.filaService.jogadoresSelecionados$.subscribe(jogadores => {
    this.jogadoresSelecionados = jogadores;
  });
}


  selecionarJogador(jogador:string): void{
    if (this.jogadoresSelecionados.includes(jogador)) {
      this.jogadoresSelecionados = this.jogadoresSelecionados.filter(j => j !== jogador);
    }
    else {
      if(this.jogadoresSelecionados.length < this.maximoJogadores){
        this.jogadoresSelecionados.push(jogador);
      }
    }

    this.filaService.setJogadoresSelecionados(this.jogadoresSelecionados)
  }


  isSelecionado(jogador: string): boolean {
    return this.jogadoresSelecionados.includes(jogador);
  }



}
