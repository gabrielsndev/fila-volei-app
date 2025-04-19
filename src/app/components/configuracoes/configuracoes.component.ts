import { Component, inject } from '@angular/core';
import { FilaService } from '../../service/fila.service';
import { Dialog } from '@angular/cdk/dialog';
import { AdicionarJogadorComponent } from '../adicionar-jogador/adicionar-jogador.component';

@Component({
  selector: 'app-configuracoes',
  standalone: false,
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.css'
})

export class ConfiguracoesComponent {

  constructor(private filaService: FilaService){}

  private dialog = inject(Dialog);
  protected openModal(){
    this.dialog.open(AdicionarJogadorComponent);
  }

  fila :string[] = [];

  ngOnInit(): void{
    this.filaService.fila$.subscribe(fila =>{
      this.fila = fila;
    })
  }

  maximoJogadores: number = 0;

  embaralharFila(){}

  zerarFila(){}

}
