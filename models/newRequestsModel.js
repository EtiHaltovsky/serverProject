
const mongoose = require('mongoose');
const { DateTime } = require('mssql');

const newrequestsSchema = mongoose.Schema(
    {
        fieldOfVolunteering: {type: String, required: true},
        from: {type: String, required: true},
        where: {type: String, required: false},
        time: {type: Time, required: true},
        day: {type: String, required: true},
        date: {type: DateTime, required: true},

    },
    {versionKey : false} 
);

// userSchema.set('strictQuery', false);

const Newrequests = mongoose.model('newrequests', newrequestsSchema, 'newrequests');
 
module.exports = newrequests;  