import '../html/userView.html';
import '../templates/adminViewTemplate.html'

import { Template } from 'meteor/templating';
import {Holdings, Transactions} from "../../config/database";
import './adminHelper';

Template.body.helpers({
    holdings() {
        return Holdings.find({user: Meteor.user().username});
    },
    transactions() {
        return Transactions.find({buyer: Meteor.user().username});
    },
    isAdminUser() {
        return Meteor.user() && Meteor.user().username === 'admin'
    },
    isLoggedInUser() {
        return Meteor.user() && Meteor.user().username !== 'admin'
    }
});