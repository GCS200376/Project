
var path = require("path");

const express = require('express');
const app = express();

const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

hbs   = require( 'express-handlebars' );

app.engine( 'hbs', hbs( { 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    hbs: allowInsecurePrototypeAccess(Handlebars),
  } ) );
app.set('view engine', 'hbs');

app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'))


app.use(express.json());
app.use(express.urlencoded());

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const hostname = "localhost";
const port = process.env.PORT || 3000;

const url =  "mongodb+srv://newUser01:wdXnHi7GftQ8erhZ@cluster0.s7ukh.mongodb.net/ATNWeb211015?retryWrites=true&w=majority"

const mongoose = require("mongoose");
mongoose.connect(
    url, 
    {   useNewUrlParser: true , useUnifiedTopology: true }
);

var solan = 0;

app.use(
    (req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- ", Date.now(), " \t request !!!", solan++ , req.url);
        next();
    }
);

app.use(
    (err, req, res, next) => {
        res.statusCode = 500;
        console.log("--- ERR", Date.now(), " \t request !!!", solan++ , req.url, err);
        res.end("Broking !!!");
    }
);

const accountRouter = require("./routes/accountRoute");
app.use("/account", accountRouter);

app.listen( port, () => {
    console.log("Start SERVER - LISTEN ", port);
});