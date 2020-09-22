import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.js';

import './body.html';

let sort_value = -1

Template.body.helpers({
    tasks() {
        // Show newest tasks at the top
        return Tasks.find({}, { sort: { rank: sort_value } });
    },
});
Template.body.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;
        const rank = 0

        // Insert a task into the collection
        Tasks.insert({
            text,
            rank,
            createdAt: new Date(), // current time
        });

        // Clear form
        target.text.value = '';
    },

    'click .sort-checked'() {
        sort_value = - sort_value;
        console.log(sort_value);
        Tasks.update(0, {
            $set: { rank:  0},
        });
    }
});

