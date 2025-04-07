import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilaService {

  private fila: string[] = [];

  private filaSubject = new BehaviorSubject<string[]>(this.fila);

  fila$ = this.filaSubject.asObservable();

  constructor() { 
    this.carregarFila();
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

  getFila() {
    return this.fila;
  }  

  removerJogador(nome:string){
    this.fila = this.fila.filter(jogador => jogador !== nome);
    this.salvarFila();
  }
}
