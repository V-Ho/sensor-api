const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 8000;



//configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SET UP EXPRESS APP & ROUTES


const router = express.Router(); //get instance of express router

// router.use(function(req, res, next) {
//   console.log('making request to router');
//   next();
// });

router.get('/', function(req, res) {
  res.json({ message: 'welcome to our api!'});
});

app.use('/api', router);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalurl + 'not found'})
})

//STARTING THE SERVER
app.listen(port);
console.log(`Application server listening on port ${port}`);

//DATABASE SETUP
// mongoose.Promise = global.Promise;
const mongouri = process.env.PROD_MONGODB || 'mongodb://localhost/evaqaidapi';

mongoose.connect(mongouri, function(err, res) {
  if (err) {
    console.log('ERROR connecting to:' + mongouri + '. ' + err);
  } else {
    console.log('Succeeded connecting to: ' + mongouri);
  }
});
