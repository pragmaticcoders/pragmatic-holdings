import { BigNumber } from 'bignumber.js';
import * as Web3 from 'web3';

import { AbstractBlock } from 'web3';
import { promisify } from './common';

export class Web3Utils {
  constructor(private web3: Web3) {}

  public async getBlockNumber() {
    return promisify<number>(cb => this.web3.eth.getBlockNumber(cb));
  }

  public async getBalance(account: Address) {
    return promisify<BigNumber>(cb => this.web3.eth.getBalance(account, cb));
  }

  public async getBlock(): Promise<AbstractBlock> {
    return promisify<AbstractBlock>(cb => this.web3.eth.getBlock('latest', cb));
  }
}
