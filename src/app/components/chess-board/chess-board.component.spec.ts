import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxChessgroundModule } from 'ngx-chessground';
import sleep from 'sleep-promise';
import { AudioService } from 'src/app/services/audio.service';
import { ChessStatusService } from 'src/app/services/chess-status.service';
import { ChessTimerFormatPipe } from 'src/app/pipes/chess-timer-format.pipe';
import { GetCpuIdService } from 'src/app/services/get-cpu-id.service';
import { createPeers } from 'src/app/mocks/services/peer-to-peer-helpers';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ChessTimerComponent } from '../chess-timer/chess-timer.component';

import { ChessBoardComponent } from './chess-board.component';
import { ChessTimerService } from 'src/app/services/chess-timer.service';
import { getAudioServiceMock } from 'src/app/mocks/audio.service.mock';
import { ReactiveComponentModule } from '@ngrx/component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { CommandService } from 'src/app/services/command.service';

describe('ChessBoardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;
  let chessStatusService: ChessStatusService;
  let chessTimerService: ChessTimerService;
  let sharedDataService: SharedDataService;
  let commandService: CommandService;

  beforeEach(async () => {
    const peers = createPeers(0);
    sharedDataService = new SharedDataService(peers[0], new GetCpuIdService(peers[0]));
    commandService = new CommandService(sharedDataService, peers[0], new GetCpuIdService(peers[0]));

    commandService.createPlayer({
      name: 'p1',
      team: 'white',
      sortNumber: 0,
      owner: peers[0].getId(),
      isReady: false
    }, peers[0].getId());
    commandService.createPlayer({
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

  it('resign option', () => {
    expect(chessStatusService.isGameOver()).toBeFalse();
    commandService.resign('white');
    jasmine.clock().tick(1 * 1000);
    expect(chessStatusService.isGameOver()).toEqual(true, 'should have resigned');
    expect(chessStatusService.currentStatus.getValue()).toEqual('white resigned', 'should have resigned');
  });

  it('timer settings', () => {
    chessTimerService.setupTimer({
      whiteTime: 60,
      whiteIncrement: 5,
      asymmetric: false
    }, 'white');

    const assertTimes = (whiteTime: number, blackTime: number, msg?: string) => {
      chessTimerService.tickHandlerExposed();
      expect(chessTimerService.getTimeSync('white')).toBeCloseTo(whiteTime, 5, msg);
      expect(chessTimerService.getTimeSync('black')).toBeCloseTo(blackTime, 5, msg);
    };

    assertTimes(60, 60, '0 moves');
    component.exposedMoveHandler('e2', 'e4');
    jasmine.clock().tick(1000);
    assertTimes(60, 60, 'after 1 move');
    component.exposedMoveHandler('e7', 'e5');
    assertTimes(60, 60, 'after 2 moves');
    jasmine.clock().tick(1000);
    assertTimes(59, 60, 'after 2 moves + 1 sec');
    component.exposedMoveHandler('d2', 'd4');
    assertTimes(64, 60, 'after 3rd move, increment');
    jasmine.clock().tick(2 * 1000);
    assertTimes(64, 58, 'after 3rd move + 2 secs');
    component.exposedMoveHandler('d7', 'd5');
    assertTimes(64, 63, 'after 4th move, increment');
  });
});
