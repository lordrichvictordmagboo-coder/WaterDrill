//API framework
const express=require('express');
//cross origin resource sharing
const cors=require('cors');
//Environment variables
require('dotenv').config();

//Routes
//const db=require('./config/db');
const routes=require('./routes');
//untilization of express 
const app=express();
app.use(cors()); //optional //for different networks (IP ADRESS)
//use routes
app.use('/api',routes);
//server listening to port 7000
const PORT=process.env.PORT || 7000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));


