import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteUtilsService {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  resetCurrentRoute() {
    this._document.defaultView?.location.reload();
  }
}
