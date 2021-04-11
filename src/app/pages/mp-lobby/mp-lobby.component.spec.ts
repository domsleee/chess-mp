import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MpLobbyComponent } from './mp-lobby.component';

describe('MpLobbyComponent', () => {
  let component: MpLobbyComponent;
  let fixture: ComponentFixture<MpLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpLobbyComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '' }
      ]
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
