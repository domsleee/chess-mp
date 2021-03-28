import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  capture = new Multiplay('/assets/audio/Capture.mp3', 3);
  move = new Multiplay('/assets/audio/Move.mp3', 3);
  genericNotify = new Audio('/assets/audio/GenericNotify.mp3');

  ngOnDestroy() {
    // @ts-ignore: temporary workaround
    this.capture = null;
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
    console.log("PLAY");
    this.ct = (this.ct+1) % this.audios.length;
  }
}


interface IPlayable {
  play(): Promise<void>;
}
