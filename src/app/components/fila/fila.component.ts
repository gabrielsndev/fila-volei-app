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

  ngOnInit(): void {
    this.filaService.fila$.subscribe(fila => {
      this.fila = fila;
    });
  }

  listaTeste = [
    'Maria',
    'João',
    'Lucas',
    'Wagner',
    'Alice'
  ]

}
