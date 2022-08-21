# Hedera SimpleMint

## Getting Started

Open your shell of choice:
```
> git clone git@github.com:fatcitydog/hack-the-6ix-2022-react.git
> cd hack-the-6ix-2022-react
> yarn install
> yarn dev
```


Open your web browser of choice (tested on Google Chrome) and go to http://localhost:5173/

## Tech Stack

- React
- Styled Components
- IPFS for file storage
- Hedera blockchain for creation and storage of NFT's

## Problem

NFT's or Non-Fungible Tokens are a new form of digital asset stored on blockchains.  One particularly popular usage of NFT's is to record ownership of digital art. NFT's offer several advantages over traditional forms of art including:

1. The ledger of record is a globally distributed database which means there will is always on, incorruptible verification of who is the actual owner
2. The art can be transferred electronically and stored digitally saving storage and maintenance costs while simultaneously providing a memetic vehicle that can be seen by billions of people over the internet
3. Royalties can be programmatically paid out to the artist whenever the NFT is transferred between parties leading to more fair compensation and better funding for the creative industry 

These advantages resulted in, [the total value of NFT's reaching $41 billion dollars in value at the end of 2021](https://markets.businessinsider.com/news/currencies/nft-market-41-billion-nearing-fine-art-market-size-2022-1). Clearly, there is a huge market for NFT's.

However, many people do not know the first thing about creating an NFT and the process can be quite technically complex. Artists often hire developers to help turn their art into NFT's and [businesses have been created merely to help create NFT's](https://synapsereality.io/services/synapse-new-nft-services/).

SimpleMint is a web app that allows anyone to create an NFT with a few clicks of a button. All it requires is for the user to upload an image and give the NFT a name. Upon clicking mint now, an NFT is created with the image stored in IPFS and automatically deposited into the creator's blockchain wallet. The underlying blockchain is [Hedera](https://hedera.com/), which is a carbon negative, enterprise grade blockchain trusted by companies like Google and Boeing.

We hope that creators and even just regular people with photos lying around will be able to turn their images into NFT's to partake in the massive advantages of this new technology.