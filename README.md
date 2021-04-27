# ChessMp

[Live link](https://domsleee.github.io/chess-mp)

## Atrocities
Angular 11 runs typescript 4.0. Chessgrounds uses templated types, a feature of typescript 4.1. Change this type to any in `types.d.ts`
```typescript
export declare type Key = 'a0' | /*`${File}${Rank}`*/any;
```

## Running locally
```bash
# serve web
npm start
```

If you want to work offline, run a peerjs server (see `PeerToPeerService#getPeerConfig`):
```
# run peerjs server
npm i -g peer
npm run peer
```

## Running tests

For wsl, you will need to setup `CHROME_BIN` to point to a chrome binary
```
export CHROME_BIN=/mnt/c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe
```
