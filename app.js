const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// database connetcion
mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database Connection Successful'))
.catch(err => console.log(err))

// request parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// set view engine
app.set("view engine", "ejs");

// set static folder

