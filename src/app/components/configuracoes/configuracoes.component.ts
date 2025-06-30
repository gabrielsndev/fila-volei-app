import { AdicionarJogadorComponent } from '../modais/adicionar-jogador/adicionar-jogador.component';
import { ConfirmComponent } from '../modais/confirm/confirm.component';
import { ConfigService } from '../../service/config.service';
import { FilaService } from '../../service/fila.service';
import { Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-configuracoes',
  standalone: false,
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.css'
})

export class ConfiguracoesComponent {

  constructor(private filaService: FilaService, private configService: ConfigService){}

  private dialog = inject(Dialog);
  protected openModal(){
    this.dialog.open(AdicionarJogadorComponent, {disableClose: false});
  }
  
  protected openModalConfirmShuffle(){
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      data: {message : "Embaralhar a Fila",
             action : "shuffle"
      }
    })
  }

  protected openModalConfirmClearList(){
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      data: {message: "Resetar a Fila",
             action: "clear"
      }
    })
  }


  fila :string[] = [];

  qtdJogadores: number = 2;
  warning = false;
  jogadoresInsuficientes = false;

  ngOnInit(): void{
    this.filaService.fila$.subscribe(fila =>{ this.fila = fila; });
    this.configService.qtdJogadores$.subscribe(valor => { this.qtdJogadores = valor});
  }

  setMaximoJogadores(value: string) {
   let numero: number = Number.parseInt(value)
   this.configService.setMaximoJogadores(numero);
   this.ifJogadoresInsuficientes()
  }


  ifJogadoresInsuficientes(){
    if(this.fila.length < this.qtdJogadores) {
      this.jogadoresInsuficientes = true;

      setTimeout(() => {
        this.jogadoresInsuficientes = false;
      }, 4000)
    }
  }
  

}
