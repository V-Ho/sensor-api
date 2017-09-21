const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST']
};

const router = express.Router(); //get instance of express router

//DATABASE SETUP

// mongoose.connect(mongouri, function(err, res) {
//   if (err) {
//     console.log('ERROR connecting to:' + mongouri + '. ' + err);
//   } else {
//     console.log('Succeeded connecting to: ' + mongouri);
//   }
// });

mongoose.connect('mongodb://localhost/evaqaidapi');
mongoose.Promise = global.Promise; //seems to work either way

//configure app to use bodyParser() & cors
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SET UP EXPRESS APP & ROUTES
app.use(function(req, res, next) {
    console.log(req.method, 'request being sent.');
    next();
});


app.use('/api', require('./routes/index')); //why can't I use ('api'/, router)?

app.use(function(err,req,res,next) {
  res.status(422).send({ error: err.message });
})

//STARTING THE SERVER
app.listen(port);
console.log(`Application server listening on port ${port}`);
