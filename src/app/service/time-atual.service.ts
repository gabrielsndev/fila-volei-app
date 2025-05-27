import { ConfigService } from './config.service';
import { FilaService } from './fila.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// Ele precisa ser OUVIDO pelo config.service, pra impedir a muudança de qtd
// impossível de resolver
// pra se ligar nas alterações de quantidade de jogadores

// quanto os jogadores selecionados que estão no fila.service

@Injectable({
  providedIn: 'root'
})
export class TimeAtualService {

  constructor(private filaService:FilaService, private configService: ConfigService) { }
}
