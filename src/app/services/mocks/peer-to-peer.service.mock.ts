import { Injectable } from "@angular/core";
import { IMessage } from "src/app/shared/peer-to-peer/defs";
import { PeerToPeerService } from "../peer-to-peer.service";


@Injectable()
export class PeerToPeerServiceMock extends PeerToPeerService {
  peerIdOverride = '';
  hostIdOverride = '';
  messageSendTimeMs = 200;
  messageHistory: IMessage[] = [];

  getId() {
    return this.peerIdOverride;
  }

  getHostId() {
    return this.hostIdOverride;
  }

  addConnection(p: PeerToPeerServiceMock) {
    console.log(`Add connection ${p.getId()}`, this.connections);
    this.connections[p.getId()] = jasmine.createSpyObj('DataConnection', ['send'], {
      'send': (m: IMessage) => {
        setTimeout(() => {
          console.log(`Message ${this.getId()} -> ${p.getId()} ${m.data.command}`, m)
          p.messageHandler(m);
        }, this.messageSendTimeMs)
      }
    });
  }

  messageHandler(m: IMessage) {
    this.messageHistory.push(m);
    return super.messageHandler(m);
  }
}