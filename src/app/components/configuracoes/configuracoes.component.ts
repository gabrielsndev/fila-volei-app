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
  descansoBicampeao: boolean = false;
  warning = false;
  jogadoresInsuficientes = false;

  ngOnInit(): void{
    this.filaService.fila$.subscribe(fila =>{ this.fila = fila; });
    this.configService.qtdJogadores$.subscribe(valor => { this.qtdJogadores = valor})
    this.configService.descansoBicampeao$.subscribe(descanso => { this.descansoBicampeao = descanso})
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

  ifWarning(){
    if(this.descansoBicampeao) {
          this.warning = true;
          setTimeout(() =>{
            this.warning = false;
          }, 4000)
    }
  }
  

  setDescansoBicampeao(){
    this.configService.setDescansoJogadores(this.descansoBicampeao);
    this.ifWarning();
    
  }


}
