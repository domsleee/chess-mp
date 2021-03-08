import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { LoadingButtonComponent } from 'src/app/loading-button/loading-button.component';
import { PeerToPeerService } from 'src/app/peer-to-peer.service';
import { RouteNames } from '../routes';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  disabled: boolean = false;
  control: FormGroup;
  loading: boolean = false;
  joinId = '';
  activateRouteSubscription: Subscription;
  @ViewChild('myButton', {static: false}) button: LoadingButtonComponent | null = null;

  constructor(private peerToPeerService: PeerToPeerService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.control = new FormGroup({
      name: new FormControl('')
    });
    this.activateRouteSubscription = this.activatedRoute.params.subscribe(params => {
      this.joinId = params.id;
      this.control.enable()
    });
  }

  ngOnInit(): void {
    if (this.joinId == '') this.control.disable();
  }

  ngOnDestroy() {
    this.activateRouteSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.control.setValue({'name': 'other'});
      this.joinGameIfValid();
    }, 1)
  }

  joinGameIfValid = async () => {
    if (this.control.valid) {
      this.loading = true;
      await this.hostGame();
      this.loading = false;
    }
    return;
  }

  async hostGame() {
    this.peerToPeerService.setupByConnectingToId(this.joinId);
    this.peerToPeerService.setAlias(this.control.controls['name'].value);
    await this.peerToPeerService.connected.pipe(first()).toPromise();
    this.router.navigate([RouteNames.MP_LOBBY]);
  }

}
