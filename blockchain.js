const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(index, timestamp, data, prevHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain{
  constructor() {
    this.chain = [this.createGenesis()];
  }

  createGenesis() {
    return new Block(0, new Date(), "Genesis", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for(let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if(currentBlock.prevHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

let coin = new Blockchain();
coin.addBlock(new Block(1, new Date(), { amount: 5}));
coin.addBlock(new Block(2, new Date(), { amount: 15}));

// coin.chain[1].data = { amount: 100 }

console.log(JSON.stringify(coin, null, 4))
console.log('Is blockchain valid? ' + coin.isChainValid());