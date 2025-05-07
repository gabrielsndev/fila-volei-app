import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private qtdJogadores: number = 0;
  private descansoBicampeao: boolean = false;
 // Testeeee
  private qtdJogadoresSubject = new BehaviorSubject<number>(this.qtdJogadores);
  public lalala:string = "";
  private descansoBicampeaoSubject = new BehaviorSubject<boolean>(this.descansoBicampeao);

  qtdJogadores$ = this.qtdJogadoresSubject.asObservable();
  descansoBicampeao$ = this.descansoBicampeaoSubject.asObservable();

  constructor() { 
    this.carregarConfiguracoes();
  }

  salvarQtdJogadores(): void {
    localStorage.setItem('qtdJogadores', this.qtdJogadores.toString());
  }

  salvarDescansoBicampeao(): void {
    localStorage.setItem('descansoBicampeao', JSON.stringify(this.descansoBicampeao));
  }

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
  }
}
