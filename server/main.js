import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
new Mongo.Collection('holdings');
new Mongo.Collection('transactions');
});

