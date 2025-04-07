import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarJogadorComponent } from './adicionar-jogador.component';

describe('AdicionarJogadorComponent', () => {
  let component: AdicionarJogadorComponent;
  let fixture: ComponentFixture<AdicionarJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarJogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
