import { Injectable } from '@angular/core';
import { Key } from 'chessground/types';
import Peer from 'peerjs';
import { Subject } from 'rxjs';
import { ICommand, IInfo, IMessage, IMove, Message } from './peer-to-peer/defs';


@Injectable({
  providedIn: 'root'
})
export class PeerToPeerService {
  messageSubject: Subject<IMessage> = new Subject();
  newConnection: Subject<void> = new Subject();
  connected: Subject<void> = new Subject();
  isHost = false;
  isConnected = false;
  alias = '';

  private peer = new Peer();
  private connections: {[key: string]: Peer.DataConnection} = {};

  constructor() {
  }

  getId() {
    return this.peer.id;
  }

  setupAsHost() {
    this.peer.destroy();
    this.peer = new Peer();
    this.isHost = true;
    this.peer.on('open', (id: string) => {
      console.log(`I am connected to server (${this.peer.id})`);
      this.connected.next();
      this.isConnected = true;

      this.peer.on('connection', (conn) => {
        this.connections[conn.peer] = conn;
        this.newConnection.next();
        conn.on('data', this.messageHandler.bind(this))
        conn.on('close', () => {
          console.log(`connection: ${conn.peer} closed!`);
          delete this.connections[conn.peer];
        })
      });
    });
  }

  setupByConnectingToId(id: string) {
    this.destroy();
    this.peer = new Peer();
    this.isHost = false;
    this.peer.on('open', (myId: string) => {
      console.log(`connecting to ${id}`)
      const conn = this.peer.connect(id);
      conn.on('open', () => {
        console.log(`connected to ${id}!`);
        this.connections[id] = conn;
        this.connected.next();
        this.isConnected = true;
        this.newConnection.next();
      })
      conn.on('data', this.messageHandler.bind(this))
      conn.on('close', () => {
        console.log(`connection: ${id} is closed`);
      })
      conn.on('error', (err: any) => {
        console.log(`connection: ${id} error: ${err}`)
      })
    });
  }

  setAlias(alias: string) {
    this.alias = alias;
  }

  getAlias() {
    return this.alias
  }

  getHostId() {
    if (this.isHost) return this.peer.id;
    return Object.keys(this.connections)[0];
  }

  private destroy() {
    this.peer.destroy();
    this.isConnected = false;
  }

  private messageHandler(message: IMessage) {
    if (this.isHost && message.type === 'BROADCAST') {
      this.broadcast(message.data, message.from);
    }
    this.messageSubject.next(message);
  }

  broadcast(data: Message, from: string | null = null) {
    const message: IMessage = {
      from: from ?? this.peer.id,
      type: 'BROADCAST',
      data: data
    };
    for (const key in this.connections) {
      this.connections[key].send(message);
    }
    return message;
  }
}
