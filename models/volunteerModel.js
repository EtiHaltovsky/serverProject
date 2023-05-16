
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/node-demo");
// mongoose.connect("mongodb://localhost:27017");

// var museumObj = mongoose.model('MuseumObject');
const volunteerSchema = mongoose.Schema(
    {
      volunteerId: {type: String, required: true},
      volunteerName: {type: String, required: true},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      address: {type: String, required: true},
      city: {type: String, required: true},
      fieldOfVolunteering: {type: String, required: true},
      branch: {type: String, required: true},
      disabledVehicle: {type: String, required: true}

    },
    {versionKey : false} 
);
// function volunteerModel(data) {
//   this.volunteerId = data.volunteerId;
//   this.volunteerName = data.volunteerName;
//   this.phone = data.phone;
//   this.email = data.email;
//   this.address = data.address;
//   this.city = data.city;
//   this.fieldOfVolunteering = data.fieldOfVolunteering;
//   this.branch = data.branch;
//   this.disabledVehicle = data.disabledVehicle;
// }// userSchema.set('strictQuery', false);

const volunteer = mongoose.model('volunteer', volunteerSchema, 'volunteers');

// mongoose.model()
// module.exports ={volunteer,volunteerModel} ; 
module.exports = volunteer;
