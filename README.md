# ChessMp

## Atrocities
Angular 11 runs typescript 4.0. Chessgrounds uses templated types, a feature of typescript 4.1. Chage this type to any in `types.d.ts`
```typescript
export declare type Key = 'a0' | /*`${File}${Rank}`*/any;
```

## Running locally
```bash
# run peerjs server
npm i -g peer
npm run peer

# serve web
npm start
```

## Running tests

For wsl, you will need to setup `CHROME_BIN` to point to a chrome binary
```
export CHROME_BIN=/mnt/c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe
```
