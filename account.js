import { PrivateKey, AccountId, PublicKey } from "@hashgraph/sdk";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import express from "express";

const MY_ACCOUNT_ID = "0.0.47941636";
const MY_PUBLIC_KEY =
  "302a300506032b6570032100c3ccc74d8e2e17d336a8de1b0bc8b93d2b2e16d9d56f08d349635ce7e5915b1f";
const MY_PRIVATE_KEY =
  "302e020100300506032b6570042204200d88c5b70f4d9370ffd35ea53eb74919dc080504958f352fe22f09bfa3134905";

class Account {
  constructor(accountId, accountPublicKey, accountPrivateKey) {
    this.accountId = AccountId.fromString(accountId);
    this.publicKey = PublicKey.fromString(accountPublicKey);
    this.privateKey = PrivateKey.fromString(accountPrivateKey);
  }
}

async function createAccount(account) {
  // Create our connection to the Hedera network
  // The Hedera JS SDK makes this really easy!
  const client = Client.forTestnet();

  myAccountId,
    myPrivateKey,
    (myPublicKey = account.accountId),
    account.accountPrivateKey,
    account.accountPublicKey;
  client.setOperator(myAccountId, myPrivateKey);

  //Create new keys
  const newAccountPrivateKey = await PrivateKey.generateED25519();
  const newAccountPublicKey = newAccountPrivateKey.publicKey;

  //Create a new account with 1,000 tinybar starting balance
  const newAccount = await new AccountCreateTransaction()
    .setKey(newAccountPublicKey)
    .setInitialBalance(Hbar.fromTinybars(1000))
    .execute(client);

  // Get the new account ID
  const getReceipt = await newAccount.getReceipt(client);
  const newAccountId = getReceipt.accountId;

  return newAccountId, newAccountPublicKey, newAccountPublicKey;
}

export const account = new Account(
  MY_ACCOUNT_ID,
  MY_PUBLIC_KEY,
  MY_PRIVATE_KEY
);
