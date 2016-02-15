declare module 'bitcoinjs-lib' {
    declare var address: {
        fromBase58Check(address: string): {hash: Buffer, version: number};
    }
}
