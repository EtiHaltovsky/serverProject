const express = require('express');
// const connectDB = require('./Config/db');
const app = express();
// const ravkavRouter = require("./ravkavRouter")
// const distance = require("./distance")
// const volunteerController = require("./controllers/volunteerController")
const volunteerRouter = require("./routers/volunteerRouter")
// const recipientRouter = require("./routers/recipientRouter")
// const userRouter = require("./routers/userRouter")
const functions = require("./functions")


const http=require('http')
// const express = require('express');
// const db = require('./db');

const port = 8000;
// const usersControllers = require('./controllers/usersControllers');
const cors = require('cors');
// const connectDB = require('./Config/db');

app.use(express.json());
// app.use('/users', usersController);
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}/`);
})
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const corsOptions ={
    origin:'http://localhost:8000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use('/volunteers', volunteerRouter);
// app.use('/users', userRouter);

// app.use('/recipients', recipientRouter);
// app.use('/users', userRouter)

// app.use('functions',functions);
app.use(express.json());
// connectDB();

// var volunteerSchema = new mongoose.Schema({
//   firstName: String,
//   lastNameName: String
// });
// const options = {
//     hostname: 'example.com',
//     port: 443,
//     path: '/',
//     method: 'GET',
//     rejectUnauthorized: false // Disable SSL/TLS certificate verification
//   };
  
  // const req = https.request(options, res => {
  //   // ...
  // });
//app.use(express.urlencoded({ extended: true }));


// const cors = require('cors');
// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200
// }

// app.use(cors(corsOptions));

// app.use('/api/user');

// app.use('/ravkav', ravkavRouter)

// app.listen(8000);








// const express = require('express');
// const db = require('./db');
// const app = express();
// const ravkavRouter = require("./ravkavRouter")
// const volunteerRouter = require("./routers/volunteerRouter")
// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3001', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));


// app.use(express.json());
// //app.use(express.urlencoded({ extended: true }));


// // const cors = require('cors');
// // const corsOptions = {
// //     origin: '*',
// //     credentials: true,
// //     optionSuccessStatus: 200
// // }

// // app.use(cors(corsOptions));

// // app.use('/api/user');

// app.use('/ravkav', ravkavRouter)

// app.use('/volunteers', volunteerRouter)

// app.listen(3001);
