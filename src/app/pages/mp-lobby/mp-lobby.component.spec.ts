import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpLobbyComponent } from './mp-lobby.component';

describe('MpLobbyComponent', () => {
  let component: MpLobbyComponent;
  let fixture: ComponentFixture<MpLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
