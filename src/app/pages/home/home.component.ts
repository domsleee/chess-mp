import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingButtonComponent } from 'src/app/components/loading-button/loading-button.component';
import { PeerToPeerService } from 'src/app/services/peer-to-peer.service';
import { RouteNames } from '../routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  control: FormGroup;
  loading = false;
  err = '';
  @ViewChild('myButton', {static: false}) button: LoadingButtonComponent | null = null;

  constructor(
    private peerToPeerService: PeerToPeerService,
    private router: Router
  ) {
    this.control = new FormGroup({
      name: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.control.setValue({name: 'dom'});
      // this.hostGameIfValid();
    }, 1);
  }

  hostGameIfValid = async () => {
    if (!this.control.valid) return;
    this.loading = true;

    try {
      await this.hostGame();
      this.err = '';
    } catch (err) {
      this.err = err;
    } finally {
      this.loading = false;
    }
  }

  localGame() {
    this.peerToPeerService.setAlias(this.control.controls.name.value);
    this.peerToPeerService.isLocal = true;
    this.router.navigate([RouteNames.MP_LOBBY], { replaceUrl: true });
  }

  async hostGame() {
    this.peerToPeerService.setAlias(this.control.controls.name.value);
    await this.peerToPeerService.setupAsHost();
    this.router.navigate([RouteNames.MP_LOBBY], { replaceUrl: true });
  }
}
