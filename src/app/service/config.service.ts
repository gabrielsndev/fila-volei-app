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
  private descansoBicampeao: boolean = false;

  private qtdJogadoresSubject = new BehaviorSubject<number>(this.qtdJogadores);
  private descansoBicampeaoSubject = new BehaviorSubject<boolean>(this.descansoBicampeao);

  qtdJogadores$ = this.qtdJogadoresSubject.asObservable();
  descansoBicampeao$ = this.descansoBicampeaoSubject.asObservable();


  private salvarQtdJogadores(): void {
    localStorage.setItem('qtdJogadores', this.qtdJogadores.toString());
  };

  private salvarDescansoBicampeao(): void {
    localStorage.setItem('descansoBicampeao', JSON.stringify(this.descansoBicampeao));
  };

  private carregarConfiguracoes(): void {
    const qtd = localStorage.getItem('qtdJogadores');
    const descanso = localStorage.getItem('descansoBicampeao');
  
    if (qtd) {
      this.qtdJogadores = +qtd;
      this.qtdJogadoresSubject.next(this.qtdJogadores);
    }
    if (descanso) {
      this.descansoBicampeao = JSON.parse(descanso);
      this.descansoBicampeaoSubject.next(this.descansoBicampeao);
    }
  };

  public setMaximoJogadores(value : number) {
    this.qtdJogadores = value;
    this.qtdJogadoresSubject.next(value);
    this.salvarQtdJogadores();
    this.filaService.changeSelected(this.qtdJogadores);
  };

  public setDescansoJogadores(value: boolean) {
    this.descansoBicampeao = value;
    this.descansoBicampeaoSubject.next(value);
    this.salvarDescansoBicampeao();
  };
  

}
