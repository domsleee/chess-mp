import { PeerToPeerServiceMock } from "./peer-to-peer.service.mock";

export const BROADCAST_FINISH_DELAY = 1000 * 2;

export function createPeers(numberOfClients: number) {
  const peers: PeerToPeerServiceMock[] = [];

  const hostPeer = new PeerToPeerServiceMock();

  hostPeer.isHost = true;
  hostPeer.alias = 'host';
  hostPeer.peerIdOverride = 'hostId';
  hostPeer.isConnected = true;
  hostPeer.hostIdOverride = hostPeer.getId();

  function addClient(alias: string) {
    const clientPeer = new PeerToPeerServiceMock();
    clientPeer.isHost = false;
    clientPeer.alias = alias;
    clientPeer.peerIdOverride = alias + 'Id';
    clientPeer.hostIdOverride = hostPeer.getId();
    hostPeer.addConnection(clientPeer);
    clientPeer.addConnection(hostPeer);
    return clientPeer;
  }

  peers.push(hostPeer);
  for (let i = 1; i <= numberOfClients; ++i) {
    const clientPeer = addClient(`client${i}`);
    clientPeer.messageSendTimeMs = 250 + 50 * i;
    peers.push(clientPeer);
  }
  return peers;
}
