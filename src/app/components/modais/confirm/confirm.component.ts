import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FilaService } from '../../../service/fila.service';
import { Component, inject, Inject, Optional } from '@angular/core';


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

    dialogRef = inject(DialogRef, {optional: true})

    

  
  callFuncions(){
    switch (this.data.action) {
      case "delete":
          this.filaService.removerJogador(this.data.player!)
          this.dialogRef?.close()
        break;
    
      default:
        break;
    }
  }

}
