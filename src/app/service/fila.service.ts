import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilaService {
  
  constructor() { 
    this.carregarFila();
  }
  private fila: string[] = [];
  private selectedPlayer: string[] = []
  private jogadoresSelecionados: string[] = []
  
  private jogadoresSelecionadosSubject = new BehaviorSubject<string[]>(this.jogadoresSelecionados);
  private filaSubject = new BehaviorSubject<string[]>(this.fila);
  private selecetedPlayerSubjected = new BehaviorSubject<string[]>(this.selectedPlayer);

  jogadoresSelecionados$ = this.jogadoresSelecionadosSubject.asObservable();
  fila$ = this.filaSubject.asObservable();
  selectedPlayer$ = this.selecetedPlayerSubjected.asObservable();
  
  setJogadoresSelecionados(jogadores: string[]) {
    this.jogadoresSelecionadosSubject.next(jogadores);
  }
  
  adicionarJogador(nome: string){
    this.fila.push(nome);
    this.salvarFila();
  }

  private salvarFila() {
    localStorage.setItem('fila', JSON.stringify(this.fila));
    this.filaSubject.next(this.fila); 
  }

  private carregarFila(){
    const filaSalva = localStorage.getItem('fila');
    if (filaSalva){
      this.fila = JSON.parse(filaSalva);
      this.filaSubject.next(this.fila); 
    }
  }
  
  
  removerJogador(nome:string){
    this.fila = this.fila.filter(jogador => jogador !== nome);
    this.salvarFila();
  }


  shuffleList(): void {
    const filaAtual = [...this.filaSubject.value];
  
    for (let i = filaAtual.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filaAtual[i], filaAtual[j]] = [filaAtual[j], filaAtual[i]];
    }
    this.fila = filaAtual;
    this.filaSubject.next(this.fila);
    localStorage.setItem('fila', JSON.stringify(this.fila));
  }

  clearList(): void {
    this.fila = [];
    this.filaSubject.next(this.fila);
    localStorage.setItem('fila', JSON.stringify(this.fila));
  }

  changeSelected(qtd: number){
    if (qtd < this.jogadoresSelecionadosSubject.getValue().length) {
      const novaLista = this.jogadoresSelecionadosSubject.getValue().slice(0, qtd);
      this.jogadoresSelecionadosSubject.next(novaLista);
    }
  }

  clearSelectPlayer() {
    const jogadoresSelecionados = this.jogadoresSelecionadosSubject.getValue();
    jogadoresSelecionados.forEach(jogador => { 
      this.removerJogador(jogador)
    });
    this.setJogadoresSelecionados([]);
    
  }

}
