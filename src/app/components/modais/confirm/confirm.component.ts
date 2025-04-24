import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FilaService } from '../../../service/fila.service';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-confirm',
  standalone: false,
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  constructor(@Inject(DIALOG_DATA) public data: {
    message: string
    action: string
    player?: string}, private filaService: FilaService){}

  fila: string[] = []

  ngOnInit(): void {
    this.filaService.fila$.subscribe(fila => {
      this.fila = fila;
    })}
    

  
  callFuncions(){
    switch (this.data.action) {
      case "delete":
          this.filaService.removerJogador(this.data.player!)
          console.log(this.data.player)
        break;
    
      default:
        break;
    }
  }

}
