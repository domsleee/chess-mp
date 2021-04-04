import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBoardComponent } from './chess-board.component';

describe('ChessBoardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessBoardComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '' }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
