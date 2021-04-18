import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-snap-slider',
  templateUrl: './snap-slider.component.html',
  styleUrls: ['./snap-slider.component.scss']
})
export class SnapSliderComponent implements OnInit {

  constructor() { }

  get myValue() {
    return this._myValue;
  }

  set myValue(val: number) {
    this._myValue = this.roundFn(val);
  }

  @Input() label = 'label';
  @Input() value: number | undefined = 0;
  @Input() min = 0;
  @Input() max = 100000;

  @ViewChild('span', {read: ElementRef}) span!: ElementRef;

  _myValue = 0;
  @Input() updateModel: (value: number) => void = () => 0;
  @Input() roundFn: (value: number) => number = t => t;

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.myValue = this.value ?? 0;
  }

  handleChange(e: MatSliderChange) {
    const value = this.myValue;
    this.updateModel(value);
  }

  setMyValue(e: MatSliderChange) {
    const value = e.value ?? 0;
    this.myValue = value;
  }

  onKeyPress(e: KeyboardEvent) {
    if (!(e.key >= '0' && e.key <= '9')) e.preventDefault();
    if (e.key == 'Enter') {
      this.span.nativeElement.blur();
    }
  }

  onValueChange(e: any) {
    const v = e.target.innerHTML;
    if (!isNaN(v)) {
      let n = this.roundFn(parseInt(v, 10));
      n = Math.min(this.max, Math.max(this.min, n));
      this.myValue = n;
      this.span.nativeElement.innerHTML = n;
    }
  }
}
