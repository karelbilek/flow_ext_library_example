/* @flow */
import * as bitcoin from 'bitcoinjs-lib';
const foo: Buffer = bitcoin.address.fromBase58Check("1CrwjoKxvdbAnPcGzYjpvZ4no4S71neKXT");
const bar = bitcoin.Address.fromBase58Check("1CrwjoKxvdbAnPcGzYjpvZ4no4S71neKXT");
