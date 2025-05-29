import { ConfigService } from './config.service';
import { FilaService } from './fila.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// Ele precisa ser OUVIDO pelo config.service, pra impedir a muudança de qtd
// impossível de resolver
// pra se ligar nas alterações de quantidade de jogadores

// quanto os jogadores selecionados que estão no fila.service

@Injectable({
  providedIn: 'root'
})
export class TimeAtualService {

  constructor(private filaService:FilaService) { }

  private timeA: string[] = [];
  private timeB: string[] = [];
  
  private timeASubject = new BehaviorSubject<string[]>([]);
  private timeBSubject = new BehaviorSubject<string[]>([]);

  timeA$ = this.timeASubject.asObservable();
  timeB$ = this.timeBSubject.asObservable();
  
  
  ngOnInit(): void{
    this.filaService.selectedPlayer$.subscribe(selecionados => { this.playerSelected = selecionados});
  }

  playerSelected: string[] = [];
  
  salvarTimes(){
    localStorage.setItem('times', JSON.stringify([this.timeA, this.timeB]));
    this.timeASubject.next(this.timeA);
    this.timeBSubject.next(this.timeB);
  }


  
}
