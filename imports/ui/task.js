import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.html';

Template.task.events({

    'click .delete'() {
        Tasks.remove(this._id);
    },

    'click .minus'() {
        var update =  this.rank - 1
        Tasks.update(this._id, {
            $set: { rank: update },
        });
    },

    'click .plus'() {
        var update =  this.rank + 1
        Tasks.update(this._id, {
            $set: { rank:  update},
        });
    },

});

