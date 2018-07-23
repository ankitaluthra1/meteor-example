import { Template } from 'meteor/templating';
import './view.html';
import {Transactions} from "../api/database";

Template.body.events({
    'submit .new-transaction'(event) {
        console.log(event);
        // Prevent default browser form submit
       // event.preventDefault();

        // Get value from form element
        const target = event.target;
        const holding = target.holding.value;
        const quantity = target.quantity.value;
        const buyer = target.buyer.value;
        const seller = target.seller.value;
        const price = target.seller.value;

        // Insert a task into the collection
        Transactions.insert({
            holding,
            quantity,
            buyer,
            seller,
            price,
            createdAt: new Date(),
        });

        // Clear form
        target.holding.value = '';
        target.quantity.value = '';
        target.buyer.value = '';
        target.seller.value = '';
        target.price.value = '';
    },
});