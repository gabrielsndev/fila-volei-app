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

  salvarTimes() {
    localStorage.setItem('times', JSON.stringify([this.timeA, this.timeB]));
    this.timeASubject.next(this.timeA);
    this.timeBSubject.next(this.timeB);
  };

  carregarTimes() {
    const times = JSON.parse(localStorage.getItem('times') ?? '[[], []]');
    this.timeA = times[0];
    this.timeB = times[1];
    this.timeASubject.next(this.timeA);
    this.timeBSubject.next(this.timeB);
  };

  definirTimeA(): void {
    this.timeA = this.jogadoresSelecionados; 
    this.timeASubject.next(this.timeA);
    this.filaService.clearSelectPlayer();
    this.salvarTimes();
  };

  definirTimeB(): void {
    this.timeB = this.jogadoresSelecionados;
    this.timeBSubject.next(this.timeB);
    this.filaService.clearSelectPlayer();
    this.salvarTimes();
  }
}
