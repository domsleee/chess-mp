import { Component, Input, OnInit } from '@angular/core';
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
}
