const express = require('express');
const router = express.Router();
const Sensor = require('../models/sensor');

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

router.put('/sensors/:id', function(req,res,next) {
  Sensor.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Sensor.findOne({_id:req.params.id}).then(function(sensor){
      res.send(sensor);
    });
  });
})

// //update a ninja in db
// router.put('/ninjas/:id',function(req,res,next){
//   Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
//     Ninja.findOne({_id:req.params.id}).then(function(ninja){
//       res.send(ninja);
//     });
//   });
// });
//
// //delete a ninja from db, need params(id)
// router.delete('/ninjas/:id',function(req,res,next){
//   Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
//     res.send(ninja);
//   })
// });




module.exports = router
