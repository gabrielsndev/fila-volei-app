import { Component, OnInit } from '@angular/core';
import { FilaService } from '../../service/fila.service';

@Component({
  selector: 'app-configuracoes',
  standalone: false,
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.css'
})

export class ConfiguracoesComponent {

  constructor(private filaService: FilaService){}

  fila :string[] = []

  ngOnInit(): void{
    this.filaService.fila$.subscribe(fila =>{
      this.fila = fila;
    })
  }

  maximoJogadores: number = 0

  embaralharFila(){}

  zerarFila(){}

}
