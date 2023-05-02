const express = require('express');
const db = require('./db');
const app = express();
const ravkavRouter = require("./ravkavRouter")
const distance = require("./distance")

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(express.json());

const options = {
    hostname: 'example.com',
    port: 443,
    path: '/',
    method: 'GET',
    rejectUnauthorized: false // Disable SSL/TLS certificate verification
  };
  
  const req = https.request(options, res => {
    // ...
  });
//app.use(express.urlencoded({ extended: true }));


// const cors = require('cors');
// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200
// }

// app.use(cors(corsOptions));

// app.use('/api/user');

app.use('/ravkav', ravkavRouter)

app.listen(3001);
