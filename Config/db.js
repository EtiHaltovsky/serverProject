const { default: mongoose } = require('mongoose');

const connectDB = () => {
  // mongoose.set('strictQuery',false);
  mongoose
    // .connect('mongodb://127.0.0.1:27017/UniteVolunteerDB')
    // .connect('mongodb://0.0.0.0:27017/UniteVolunteerDB')

    .connect('mongodb://localhost:27017/UniteVolunteerDB')
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err))
};

module.exports = connectDB;