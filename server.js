const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("You have connected to your Database successfully"));



app.listen(4000, ()=> console.log("server is up and running"));