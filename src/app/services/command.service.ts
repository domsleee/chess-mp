import { Injectable } from '@angular/core';
import { Color } from 'chessground/types';
import { PeerToPeerService } from './peer-to-peer.service';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(
    private sharedDataService: SharedDataService,
    private peerToPeerService: PeerToPeerService) { }

  resign(team: Color) {
    this.peerToPeerService.broadcastAndToSelf({
      command: 'RESIGN',
      team,
      matchId: this.sharedDataService.getSharedDataSync().matchCount
    });
  }
}
