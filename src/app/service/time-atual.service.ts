import { FilaService } from './fila.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimeAtualService {

  constructor(private filaService:FilaService) {
    this.carregarTimes();
    this.filaService.jogadoresSelecionados$.subscribe(selecionados => { this.jogadoresSelecionados = selecionados});
  }

  private timeA: string[] = [];
  private timeB: string[] = [];
  
  private timeASubject = new BehaviorSubject<string[]>([]);
  private timeBSubject = new BehaviorSubject<string[]>([]);

  timeA$ = this.timeASubject.asObservable();
  timeB$ = this.timeBSubject.asObservable();
  
  
  jogadoresSelecionados: string[] = [];

  salvarTimes(): void {
    localStorage.setItem('times', JSON.stringify([this.timeA, this.timeB]));
    this.timeASubject.next(this.timeA);
    this.timeBSubject.next(this.timeB);
  };

  excluirJogador(player: string, team: boolean): void {
    if(team){
      this.timeA = this.timeA.filter(jogador => jogador !== player);
    } else {
      this.timeB = this.timeB.filter(jogador => jogador !== player);
    }
    this.salvarTimes();
    this.filaService.adicionarJogador(player);
  };

  carregarTimes() {
    const times = JSON.parse(localStorage.getItem('times') ?? '[[], []]');
    this.timeA = times[0];
    this.timeB = times[1];
    this.timeASubject.next(this.timeA);
    this.timeBSubject.next(this.timeB);
  };

  definirTimeA(): void {
    this.timeA.forEach(player => {
      this.filaService.adicionarJogador(player)
    });
    this.timeA = this.jogadoresSelecionados; 
    this.filaService.clearSelectPlayer();
    this.salvarTimes();
  };

  definirTimeB(): void {
    this.timeB.forEach(player => {
      this.filaService.adicionarJogador(player)
    });
    this.timeB = this.jogadoresSelecionados;
    this.filaService.clearSelectPlayer();
    this.salvarTimes();
  }

    addSinglePlayer(jogador:string, time: boolean) {
      if(time) {
        this.timeA.push(jogador);
      } else {
        this.timeB.push(jogador);
      }
      this.salvarTimes();
  }
}
