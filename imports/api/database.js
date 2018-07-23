import { Mongo } from 'meteor/mongo';

export const Holdings = new Mongo.Collection('holdings');
export const Transactions = new Mongo.Collection('transactions');