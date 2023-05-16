// class recipient {
//     constructor(name,id,dateOfBirth,phone,email,gender,fieldOfVolunteering,branch,disabledVehicle) {
//       this.name = name;
//       this.id=id;
//       this.dateOfBirth=dateOfBirth;
//       this.phone=phone;
//       this.email=email;
//       this.gender = gender;
//       //תחום התנדבות
//       this.fieldOfVolunteering=fieldOfVolunteering;
//       //סניף
//       this.branch=branch;
//       //האם צריך רכב נכים
//       this.disabledVehicle=disabledVehicle;
  
//     }
  
//     introduce() {
//     //   console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I identify as ${this.gender}.`);
//     }
//   }
  

  const mongoose = require('mongoose');
const { DateTime } = require('mssql');

const recipientSchema = mongoose.Schema(
    {
      recipientId: {type: String, required: true},
      recipientName: {type: String, required: true},
      dateOfBirth: {type: DateTime, required: false},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      // gender: {type: String, required: true}
      kindOfHelp: {type: String, required: true},
      branch: {type: String, required: true},
      needDisabledVehicle: {type: String, required: true}

    },
    {versionKey : false} 
);

// userSchema.set('strictQuery', false);

const Recipient = mongoose.model('recipient', recipientSchema, 'recipients');
 
module.exports = recipient;  