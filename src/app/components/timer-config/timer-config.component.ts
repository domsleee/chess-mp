import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISharedData } from 'src/app/peer-to-peer/shared-data';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-timer-config',
  templateUrl: './timer-config.component.html',
  styleUrls: ['./timer-config.component.scss']
})
export class TimerConfigComponent implements OnInit {
  updateWhiteTime = (val: number) => this.sharedDataService.setSharedData({timerSettings: {whiteTime: val}});
  updateWhiteIncrement = (val: number) => this.sharedDataService.setSharedData({timerSettings: {whiteIncrement: val}});

  sharedData: Observable<ISharedData>;

  constructor(private sharedDataService: SharedDataService) {
    this.sharedData = this.sharedDataService.sharedData.asObservable();
  }

  ngOnInit(): void {
  }

}
