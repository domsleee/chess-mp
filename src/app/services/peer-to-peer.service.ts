import { Injectable } from '@angular/core';
import Peer, { PeerJSOption } from 'peerjs';
import { interval, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMessage, MessageData } from '../shared/peer-to-peer/defs';

const debug = /*(...args: any[]) => {}*/console.log;
const TIMEOUT_MS = 5000;
const HEROKU_HOST = 'heroku-chess-123.herokuapp.com';
export const DEFAULT_ID = 'default';

interface IBroadcastOptions {
  echo?: boolean;
  from?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeerToPeerService {
  messageSubject: Subject<IMessage> = new ReplaySubject(100);
  isHost = false;
  isConnected = false;
  alias = DEFAULT_ID;

  private peer: Peer | null = null;
  protected connections: {[key: string]: Peer.DataConnection} = {};

  constructor() {
  }

  getId() {
    return this.peer?.id ?? DEFAULT_ID;
  }

  async setupAsHost() {
    this.peer?.destroy();
    this.peer = new Peer(this.getPeerConfig());
    this.isHost = true;
    await this.connectToPeerServer();
    this.isConnected = true;

    this.peer!.on('connection', (conn) => {
      this.connections[conn.peer] = conn;
      conn.on('data', this.messageHandler.bind(this));
      this.attachErrorAndCloseConnEvents(conn);
    });
    this.peer!.on('close', () => {
      debug("NOT ACCEPTING INCOMING CONNECTIONS??");
    });
  }

  async setupByConnectingToId(id: string) {
    this.destroy();
    this.peer = new Peer(this.getPeerConfig());
    this.isHost = false;
    await this.connectToPeerServer();

    return new Promise((resolve, reject) => {
      const timeoutSub = interval(TIMEOUT_MS).subscribe(t => {
        reject(`Could not connect after ${TIMEOUT_MS}ms. Is the host ${id} correct?`);
        timeoutSub.unsubscribe();
      });

      debug(`connecting to ${id}`)
      const conn = this.peer!.connect(id);
      conn.on('open', () => {
        debug(`connected to ${id}!`);
        this.connections[id] = conn;
        this.isConnected = true;
        conn.on('data', this.messageHandler.bind(this))
        resolve(true);
        timeoutSub.unsubscribe();
      });
      this.attachErrorAndCloseConnEvents(conn, (err) => {
        reject(err);
        conn.close();
        timeoutSub.unsubscribe();
      });

    })
  }

  setAlias(alias: string) {
    this.alias = alias;
  }

  getAlias() {
    return this.alias
  }

  getHostId() {
    if (this.isHost) return this.peer!.id;
    return Object.keys(this.connections)[0];
  }

  broadcastAndToSelf(data: MessageData, options?: IBroadcastOptions) {
    const message = this.broadcast(data, options);
    this.messageSubject.next(message);
    return message;
  }

  broadcast(data: MessageData, options?: IBroadcastOptions) {
    const from = options?.from ?? this.getId();
    const message: IMessage = {
      from,
      type: 'BROADCAST',
      data
    };
    if (options?.echo) {
      message.echoBroadcast = true;
    }
    for (const key in this.connections) {
      if (key == from && !options?.echo) continue;
      this.sendMessage(key, message);
    }
    return message;
  }

  sendSingleMessage(to: string, data: MessageData) {
    if (!(to in this.connections)) return;
    const message: IMessage = {
      from: this.getId(),
      type: 'SINGLE',
      data: data
    }
    this.sendMessage(to, message);
  }
  
  private getPeerConfig(): PeerJSOption {
    if (false && !environment.production) {
      return {
        host: 'localhost',
        path: '/myapp',
        port: 9000,
        key: 'peerjs'
      };
    }
    return {
      host: HEROKU_HOST,
      port: 443,
      secure: true
    };
  }

  private connectToPeerServer() {
    return new Promise((resolve, reject) => {
      this.peer!.on('open', (id: string) => {
        debug(`I am connected to peer server as (${this.getId()})`);
        resolve(true);
      });
      this.peer!.on('error', (err) => {
        reject(err);
      });
    });
  }

  private attachErrorAndCloseConnEvents(conn: Peer.DataConnection, additionalFn?: (err?: string) => void) {
    conn.on('error', (err) => {
      console.log(`connection: ${conn.peer} error! ${err}`);
      this.onPeerDisconnected(conn);
      if (additionalFn != null) additionalFn(err);
    });

    this.attachToConnCloseEvents(conn, () => {
      console.log(`connection: ${conn.peer} closed!`);
      this.onPeerDisconnected(conn);
      if (additionalFn != null) additionalFn();
    });
  }

  private attachToConnCloseEvents(conn: Peer.DataConnection, fn: () => void) {
    conn.on('close', () => fn());
    // @ts-ignore
    conn.on('iceStateChanged', (status: any) => {
      if (status === 'disconnected') {
        fn();
      }
    })
  }

  private onPeerDisconnected(conn: any) {
    delete this.connections[conn.peer];
    this.broadcastAndToSelf({
      command: 'DISCONNECTED',
      name: conn.peer
    });
  }

  private destroy() {
    this.peer?.destroy();
    this.isConnected = false;
  }

  protected messageHandler(message: IMessage) {
    if (this.isHost && message.type === 'BROADCAST') {
      this.broadcast(message.data, {from: message.from, echo: message.echoBroadcast});
    }
    this.messageSubject.next(message);
  }

  private sendMessage(to: string, message: IMessage) {
    if (!(to in this.connections)) return;
    debug(`SEND MESSAGE TO ${to}`, message);
    this.connections[to].send(message);
  }
}