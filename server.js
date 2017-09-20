const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 8000;

//configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API ROUTES
const router = express.Router(); //get instance of express router
router.get('/', function(req,res) {
  res.json({ message: 'welcome to our API :)'});
});

app.use('/api', router);

//STARTING THE SERVER
app.listen(port);
console.log(`Application server listening on port ${port}`);

//DATABASE SETUP
const mongouri = process.env.PROD_MONGODB || 'mongodb://localhost/evaqaidapi';

mongoose.connect(mongouri, function(err, res) {
  if (err) {
    console.log('ERROR connecting to:' + mongouri + '. ' + err);
  } else {
    console.log('Succeeded connecting to: ' + mongouri);
  }
});
