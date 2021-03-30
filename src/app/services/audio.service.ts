import { Inject, Injectable } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'; 

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(@Inject(APP_BASE_HREF) private baseHref: string) { }

  capture = new Multiplay(this.getAsset('audio/Capture.mp3'), 3);
  move = new Multiplay(this.getAsset('audio/Move.mp3'), 3);
  genericNotify = new Audio(this.getAsset('audio/GenericNotify.mp3'));

  private getAsset(assetDir: string) {
    return `${this.baseHref}assets/${assetDir}`;
  }

}

class Multiplay implements IPlayable {
  private ct = 0;
  private audios: Array<HTMLAudioElement> = [];

  constructor(src: string, amount: number) {
    for (let i = 0; i < amount; ++i) {
      this.audios.push(new Audio(src));
    }
  }

  async play() {
    this.audios[this.ct].play();
    this.ct = (this.ct+1) % this.audios.length;
  }
}


interface IPlayable {
  play(): Promise<void>;
}
