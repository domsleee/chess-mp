import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxChessgroundModule } from 'ngx-chessground';
import sleep from 'sleep-promise';
import { AudioService } from 'src/app/services/audio.service';
import { ChessStatusService } from 'src/app/services/chess-status.service';
import { ChessTimerFormatPipe } from 'src/app/services/chess-timer-format.pipe';
import { GetCpuIdService } from 'src/app/services/get-cpu-id.service';
import { createPeers } from 'src/app/services/mocks/peer-to-peer-helpers';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ChessTimerComponent } from '../chess-timer/chess-timer.component';

import { ChessBoardComponent } from './chess-board.component';
import { ChessTimerService } from 'src/app/services/chess-timer.service';
import { getAudioServiceMock } from 'src/app/mocks/audio.service.mock';
import { ReactiveComponentModule } from '@ngrx/component';
import { PlayerListComponent } from '../player-list/player-list.component';

describe('ChessBoardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;
  let chessStatusService: ChessStatusService;
  let chessTimerService: ChessTimerService;
  let sharedDataService: SharedDataService;

  beforeEach(async () => {
    const peers = createPeers(0);
    sharedDataService = new SharedDataService(peers[0], new GetCpuIdService(peers[0]));

    sharedDataService.createPlayer({
      name: 'p1',
      team: 'white',
      sortNumber: 0,
      owner: peers[0].getId(),
      isReady: false
    }, peers[0].getId());
    sharedDataService.createPlayer({
      name: 'p2',
      team: 'black',
      sortNumber: 0,
      owner: peers[0].getId(),
      isReady: false
    }, 'zzz');

    chessStatusService = new ChessStatusService(sharedDataService);
    chessTimerService = new ChessTimerService();

    const configureTestBed = TestBed.configureTestingModule({
      declarations: [
        ChessBoardComponent,
        ChessTimerComponent,
        ChessTimerFormatPipe,
        PlayerListComponent
      ],
      imports: [
        NgxChessgroundModule,
        ReactiveComponentModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '' },
        { provide: PeerToPeerService, useValue: peers[0]},
        { provide: AudioService, useValue: getAudioServiceMock() }
      ]
    });

    TestBed.overrideComponent(
      ChessBoardComponent,
      { add: { providers: [
        { provide: ChessStatusService, useValue: chessStatusService },
        { provide: ChessTimerService, useValue: chessTimerService},
      ] } }
    );

    await configureTestBed.compileComponents();

    fixture = TestBed.createComponent(ChessBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();
    component.ngAfterViewInit();
    component.ngAfterContentInit();

    jasmine.clock().install();
    jasmine.clock().mockDate();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.myTeam).toBe('white');
  });

  it('should only timeout after 2 moves', () => {
    expect(chessStatusService.isGameOver()).toBeFalse();
    jasmine.clock().tick(200 * 1000);
    expect(chessStatusService.isGameOver()).toEqual(false, 'Zero moves should not timeout');
    component.exposedMoveHandler('e2', 'e4');
    jasmine.clock().tick(200 * 1000);
    expect(chessStatusService.isGameOver()).toEqual(false, 'One move should not timeout');
    component.exposedMoveHandler('e7', 'e5');
    jasmine.clock().tick(200 * 1000);
    expect(chessStatusService.isGameOver()).toEqual(true, 'Two moves should timeout');
  });

  it('threefold repetition', () => {
    expect(chessStatusService.isGameOver()).toBeFalse();
    const moves = [
      ['b1', 'c3'],
      ['b8', 'c6'],
      ['c3', 'b1'],
      ['c6', 'b8']
    ];
    for (let i = 0; i < 2; ++i) {
      for (const move of moves) {
        expect(chessStatusService.isGameOver()).toBeFalse();
        component.exposedMoveHandler(move[0], move[1]);
      }
    }
    expect(chessStatusService.isGameOver()).toBeTrue();
    expect(chessStatusService.currentStatus.getValue()).toEqual('draw');
  });
});
