# simple-blockchain-js

## Javascript code for understanding the concept and premise of how Blockchain works  
A block within a blockchain consists of data, a hash of the identity of the block including its data, and the hash of the preceding block.  

How blockchains become reliable is the difficulty of tampering with the data while maintaining the blockchain integrity supported by the record of each previous hash.  

If someone tampers with the data within a block, they would also have to adjust the hash, and therefore also adjust the record of previous hashes in every subsequent block.  

And if there are multiple records of this single blockchain, that person will have to change every record of this tampered blockchain.  

There is also a mining simulation that includes a difficulty setting. By increasing the number of 0's required to precede the hash, more computational power is required to calculate the proper hash to create the block.  

A nonce value is required because something in the data or identity of the block requires a change in order for the hash to be recalculated. This value is inconsequential to any other purpose.  


