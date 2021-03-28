import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LichessService } from 'src/app/services/lichess.service';
import { ChessStatusService } from 'src/app/services/chess-status.service';

@Component({
  selector: 'app-analyse-button',
  templateUrl: './analyse-button.component.html',
  styleUrls: ['./analyse-button.component.scss']
})
export class AnalyseButtonComponent implements OnInit {
  analyseLink = '';
  fetching = false;

  constructor(
    private chessStatusService: ChessStatusService,
    private lichessService: LichessService) { }

  ngOnInit(): void {
  }

  async fetchAnalysisLink() {
    const pgn = this.chessStatusService.getPgn();
    const link = await this.getAnalysisLink(pgn);
    window.open(link);
  }

  async getAnalysisLink(pgn: string) {
    if (this.analyseLink !== '') {
      return this.analyseLink;
    }
    this.fetching = true;
    let link = '';
    try {
      link = await this.lichessService.importGame(pgn);
      this.analyseLink = link;
    } catch (err) {
      console.log(err);
    } finally {
      this.fetching = false;
    }
    return link;
  }

}
