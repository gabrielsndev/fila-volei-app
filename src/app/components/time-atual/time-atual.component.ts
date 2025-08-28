import { TimeAtualService } from '../../service/time-atual.service';
import { ConfigService } from '../../service/config.service';
import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-time-atual',
  standalone: false,
  templateUrl: './time-atual.component.html',
  styleUrl: './time-atual.component.css'
})
export class TimeAtualComponent {

  constructor(private timesAtuais: TimeAtualService, private configuracao: ConfigService) {};
  
  ngOnInit(): void {
    this.timesAtuais.timeA$.subscribe(timeA => { 
      this.timeA = timeA;
    });

    this.timesAtuais.timeB$.subscribe(timeB => {
      this.timeB = timeB;
    });

    this.configuracao.qtdJogadores$.subscribe(qtd => {
      this.qtdTime = qtd;

      while (this.timeA.length > this.qtdTime) {
        const playerRemovido = this.timeA.pop();
        if (playerRemovido) {
          this.timesAtuais.excluirJogador(playerRemovido, true);
        }
      }

      while(this.timeB.length > this.qtdTime) {
        const playerRemovido = this.timeB.pop();
        if(playerRemovido) {
          this.timesAtuais.excluirJogador(playerRemovido, false);
        }
      }
      
    });

  };

  qtdTime:number = 0;
  timeA:string[] = [];
  timeB:string[] = [];

  definirtimeA() {
    this.timesAtuais.definirTimeA();
  };

  definirtimeB() {
    this.timesAtuais.definirTimeB();
  };

  excluirJogador(player: string, team: boolean): void {
    this.timesAtuais.excluirJogador(player, team);
  };
}
