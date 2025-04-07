import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAtualComponent } from './time-atual.component';

describe('TimeAtualComponent', () => {
  let component: TimeAtualComponent;
  let fixture: ComponentFixture<TimeAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeAtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
