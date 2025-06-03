import { TimeAtualService } from '../../service/time-atual.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-time-atual',
  standalone: false,
  templateUrl: './time-atual.component.html',
  styleUrl: './time-atual.component.css'
})
export class TimeAtualComponent {

  constructor(private timesAtuais: TimeAtualService) {};
  
  ngOnInit(): void {
    this.timesAtuais.timeA$.subscribe(timeA => { 
      this.timeA = timeA;
    })

    this.timesAtuais.timeB$.subscribe(timeB => {
      this.timeB = timeB;
    })

  };

  timeA:string[] = [];
  timeB:string[] = [];

  definirtimeA() {
    this.timesAtuais.definirTimeA();
  }

  definirtimeB() {
    this.timesAtuais.definirTimeB();
  }
}
