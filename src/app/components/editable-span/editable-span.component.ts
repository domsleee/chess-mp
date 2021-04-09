import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';

const debug = /*(...args: any[]) => {}*/console.log;

@Component({
  selector: 'app-editable-span',
  templateUrl: './editable-span.component.html',
  styleUrls: ['./editable-span.component.scss']
})
export class EditableSpanComponent implements OnInit {
  @ViewChild("span", {read: ElementRef}) span!: ElementRef;
  @Input() setNumber: (v: number) => void = () => {};
  @Input() value: number = -1;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  onKeyPress(e: KeyboardEvent) {
    debug("spankeypress", e.key);
    if (!(e.key >= '0' && e.key <= '9')) e.preventDefault();
    if (e.key == 'Enter') {
      this.span.nativeElement.blur();
    }
  }

  onBlur(e: Event) {
    this.document.removeEventListener('keydown', this.enterKeyHandler);
    this.onSpanValueChange((e as any).target.innerHTML);
  }

  onClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  onFocus(e: Event) {
    this.document.addEventListener('keydown', this.enterKeyHandler);
  }

  onMouseDown(e: Event) {
    this.document.addEventListener('mouseup', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation(); 
    }, {once: true});
  }

  
  private onSpanValueChange(v: any) {
    debug("SPAN VALUE CHANGE", v);
    if (!isNaN(v)) {
      let n = parseInt(v, 10);
      const min = 0, max = 1000;
      n = Math.min(max, Math.max(min, n));
      this.setNumber(n);
      this.span.nativeElement.innerHTML = n;
    }
  }

  private enterKeyHandler = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.document.removeEventListener('keydown', this.enterKeyHandler);
      this.span.nativeElement.blur();
    }
  };
}
