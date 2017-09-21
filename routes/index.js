const express = require('express');
const router = express.Router();
const Sensor = require('../models/sensor');

// router.route('/sensors')
//   .post(function(req,res,next) {
//     var sensor = new Sensor();
//     req.body
//     console.log(req.body, 'req.body');
//
//     Sensor.create(req.body).then(function(sensor) {
//       res.send(sensor)
//     }).catch();
//   });

// router.post('/sensors', function(req,res,next) {
//   var sensor = new Sensor();
//   sensor.name = req.body.name;
//
//
//   Sensor.create(req.body).then(function(sensor) {
//     res.send(sensor);
//   }).catch();
// })

router.get('/sensors', function(req,res,next) {
  Sensor.find({}).then(function(sensors) {
    res.send(sensors);
  })
})

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to our API!'});
});


router.post('/sensors', function(req,res,next) {
  var sensor = new Sensor();
  sensor.name = req.body.name;


  Sensor.create(req.body).then(function(sensor) {
    res.send(sensor);
  }).catch();
})




module.exports = router
