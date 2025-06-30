import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilaService } from './fila.service';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private filaService:FilaService) { 
    this.carregarConfiguracoes();
  }

  ngOnInit(): void{
    this.filaService.selectedPlayer$.subscribe(selecionados => { this.playerSelected = selecionados});
  }

  playerSelected: string[] = [];
  
  private qtdJogadores: number = 0;

  private qtdJogadoresSubject = new BehaviorSubject<number>(this.qtdJogadores);
  
  qtdJogadores$ = this.qtdJogadoresSubject.asObservable();

  private salvarQtdJogadores(): void {
    localStorage.setItem('qtdJogadores', this.qtdJogadores.toString());
  };


  private carregarConfiguracoes(): void {
    const qtd = localStorage.getItem('qtdJogadores');
  
    if (qtd) {
      this.qtdJogadores = +qtd;
      this.qtdJogadoresSubject.next(this.qtdJogadores);
    }
  };

  public setMaximoJogadores(value : number) {
    this.qtdJogadores = value;
    this.qtdJogadoresSubject.next(value);
    this.salvarQtdJogadores();
    this.filaService.changeSelected(this.qtdJogadores);
  };

}
