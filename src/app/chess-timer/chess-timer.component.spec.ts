import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessTimerComponent } from './chess-timer.component';

describe('ChessTimerComponent', () => {
  let component: ChessTimerComponent;
  let fixture: ComponentFixture<ChessTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
