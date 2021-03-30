import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})


export class LoadingButtonComponent implements OnInit {

  @Input() text: string = 'text';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() buttonClass = 'mat-raised-button';

  constructor() { }

  ngOnInit(): void { }

}