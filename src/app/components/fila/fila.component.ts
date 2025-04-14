import { Component, OnInit } from '@angular/core';
import { FilaService } from '../../service/fila.service';

@Component({
  selector: 'app-fila',
  standalone: false,
  templateUrl: './fila.component.html',
  styleUrl: './fila.component.css'
})
export class FilaComponent {

  constructor(private filaService: FilaService) {}

  fila: string[] = [];
  listaTeste = [
    'Maria',
    'João',
    'Lucas',
    'Wagner',
    'Alice'
  ];
  jogadoresSelecionados: string[] = [];


  ngOnInit(): void {
    this.filaService.fila$.subscribe(fila => {
      this.fila = fila;
    });

    if (this.listaTeste.length > 0) {
      const primeiro = this.listaTeste[0];
      if (!this.jogadoresSelecionados.includes(primeiro)) {
        this.jogadoresSelecionados.unshift(primeiro);
    }
    }
  }



  selecionarJogador(jogador:string): void{
    const primeiro = this.listaTeste[0];
    if (jogador === primeiro) {
      return;
    }
    
    if (this.jogadoresSelecionados.includes(jogador)) {
      this.jogadoresSelecionados = this.jogadoresSelecionados.filter(j => j !== jogador);
    } else {
      if(this.jogadoresSelecionados.length < this.maximoJogadores){
        this.jogadoresSelecionados.push(jogador);
      }
    }
  }


  isSelecionado(jogador: string): boolean {
    return this.jogadoresSelecionados.includes(jogador);
  }

  maximoJogadores:number = 4



}
