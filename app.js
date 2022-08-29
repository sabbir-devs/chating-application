// extarnal imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require("./router/loginRouter")
const usersRouter = require("./router/usersRouter")
const inboxRouter = require("./router/inboxRouter")


// internal import
const { notFoundHandaler, errorHandaler } = require('./middlewares/common/errorHandaler')


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
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookes 
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found handaler
app.use(notFoundHandaler);

// common error handaler
app.use(errorHandaler);



app.listen(port, () => {
    console.log(`app listening to port ${port}`)
})
