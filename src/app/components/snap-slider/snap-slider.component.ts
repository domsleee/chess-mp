import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-snap-slider',
  templateUrl: './snap-slider.component.html',
  styleUrls: ['./snap-slider.component.scss']
})
export class SnapSliderComponent implements OnInit {

  @Input() label: string = "label";
  @Input() value: number | undefined = 0;
  @Input() min: number = 0;
  @Input() max: number = 100000;
  @Input() updateModel: (value: number) => void = () => 0;
  @Input() roundFn: (value: number) => number = t => t;

  @ViewChild("span", {read: ElementRef}) span!: ElementRef;

  _myValue: number = 0;

  constructor() { }

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

  get myValue() {
    return this._myValue;
  }

  set myValue(val: number) {
    this._myValue = this.roundFn(val);
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
