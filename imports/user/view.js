import { Template } from 'meteor/templating';

import './view.html';
import {Holdings, Transactions} from "../api/database";

Template.body.helpers({
    holdings() {
        console.log(Holdings.find({}));
        return Holdings.find({});
    },
    transactions() {
        return Transactions.find({});
    }
});