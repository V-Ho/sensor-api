
//STANDARD DATASET
{
    "device_type": {"salida", "escaperoute", "antipanic", "build_in", "opbouw", "arrow"},
    "device_firmware_version" : "1.0.1",
    "device_status": "first_boot",
    "node_type": {"end", "router", "gateway"},
    "voltage_main_230": true,
    "voltage_secundaire": true,
    "battery" : {
                "battery_count": 1, //which battery is it (if there are more then 1)
                "ubat": 3.7,        //what does 'ubat' mean?
                "lcharge": 4.2,     //what does 'lcharge' mean? "load_charge"?
                "ldecharge": 4.1,   //what does 'ldecharge' mean?
                "charge_level": 0.8         //This means 80% charged
        },{

                "battery_count": 2, //which battery is it (if there are more then 1)
                "ubat": 3.7,        //what does 'ubat' mean?
                "lcharge": 4.2,     //what does 'lcharge' mean?
                "ldecharge": 4.1,   //what does 'ldecharge' mean?
                "charge_level": 0.8     //this means 80% charged
        }
    "led_status": {
      "i1": true,
      "i2": true
    },
    "internal_temperature": 23.3,
    "evac_light_on": false,
    "node_available": true,
    "connected_devices": [
      256,
      257,
      312
    ],
    "connected_sensors": {
      "bus1": true,
      "bus2": false,
      "bus3": 3.8,
      "bus4": 0.0
    }
  }


// lamp test
  {
    "test_successful": true,
    "status_message": {}
  }


// heat detected
  {
    "heat_measured": 55.3,
    "status_message": {}
  }


// fire detected
  {
    "fire_measured": true,
    "status_message": {}
  }


// smoke detected
  {
    "ppm_measured": 129,
    "status_message": {}
  }


  /////SENSOR 1
{"device_name": {
    type: "Sensor 1",
  },
  {
    "device_type": {"salida"},
    "device_firmware_version" : "1.0.1",
    "device_status": "first_boot",
    "node_type": {"end"},
    "voltage_main_230": true,
    "voltage_secundaire": true,
    "battery" : {
                "battery_count": 1, //which battery is it (if there are more then 1)
                "ubat": 3.7,        //what does 'ubat' mean?
                "lcharge": 4.2,     //what does 'lcharge' mean? "load_charge"?
                "ldecharge": 4.1,   //what does 'ldecharge' mean?
                "charge_level": 0.8         //This means 80% charged
        },{

                "battery_count": 2, //which battery is it (if there are more then 1)
                "ubat": 3.7,        //what does 'ubat' mean?
                "lcharge": 4.2,     //what does 'lcharge' mean?
                "ldecharge": 4.1,   //what does 'ldecharge' mean?
                "charge_level": 0.8     //this means 80% charged
        }
    "led_status": {
      "i1": true,
      "i2": true
    },
    "internal_temperature": 23.3,
    "evac_light_on": false,
    "node_available": true,
    "connected_devices": [
      256,
      257,
      312
    ],
    "connected_sensors": {
      "bus1": true,
      "bus2": false,
      "bus3": 3.8,
      "bus4": 0.0
    }
  }


  // lamp test
  {
    "test_successful": true,
    "status_message": {}
  }


  // heat detected
  {
    "heat_measured": 55.3,
    "status_message": {}
  }


  // fire detected
  {
    "fire_measured": true,
    "status_message": {}
  }


  // smoke detected
  {
    "ppm_measured": 129,
    "status_message": {}
  }
}

///SENSOR 2

{
  "device": {
  "device_name": "Sensor 2",
  "device_type": "antipanic",
  "device_firmware_version" : "1.0.1",
  "device_status": "first_boot",
  "node_type": "end",
  "voltage_main_230": true,
  "voltage_secundaire": true,
  "battery" : [{
              "battery_count": 1,
              "ubat": 3.7,
              "lcharge": 4.2,
              "ldecharge": 4.1,
              "charge_level": 0.8
              },
              {
              "battery_count": 2,
              "ubat": 3.7,
              "lcharge": 4.2,
              "ldecharge": 4.1,
              "charge_level": 0.8
            }],
  "led_status": {
    "i1": true,
    "i2": true
  },
  "internal_temperature": 23.3,
  "evac_light_on": false,
  "node_available": true,
  "connected_devices": [
    256,
    257,
    312
  ],
  "connected_sensors": {
    "bus1": true,
    "bus2": false,
    "bus3": 3.8,
    "bus4": 0.0
  }
}}


  // lamp test
  {
  "test_successful": true,
  "status_message": {}
  }


  // heat detected
  {
  "heat_measured": 55.3,
  "status_message": {}
  }


  // fire detected
  {
  "fire_measured": true,
  "status_message": {}
  }


  // smoke detected
  {
  "ppm_measured": 129,
  "status_message": {}
  }
}

/////SENSOR 3
device_name: {
  type: Sensor 3,
},
{
  "device_type": {"opbouw"},
  "device_firmware_version" : "1.0.1",
  "device_status": "first_boot",
  "node_type": {"gateway"},
  "voltage_main_230": true,
  "voltage_secundaire": true,
  "battery" : {
              "battery_count": 1, //which battery is it (if there are more then 1)
              "ubat": 3.7,        //what does 'ubat' mean?
              "lcharge": 4.2,     //what does 'lcharge' mean? "load_charge"?
              "ldecharge": 4.1,   //what does 'ldecharge' mean?
              "charge_level": 0.8         //This means 80% charged
      },{

              "battery_count": 2, //which battery is it (if there are more then 1)
              "ubat": 3.7,        //what does 'ubat' mean?
              "lcharge": 4.2,     //what does 'lcharge' mean?
              "ldecharge": 4.1,   //what does 'ldecharge' mean?
              "charge_level": 0.8     //this means 80% charged
      }
  "led_status": {
    "i1": true,
    "i2": true
  },
  "internal_temperature": 23.3,
  "evac_light_on": false,
  "node_available": true,
  "connected_devices": [
    256,
    257,
    312
  ],
  "connected_sensors": {
    "bus1": true,
    "bus2": false,
    "bus3": 3.8,
    "bus4": 0.0
  }
}


// lamp test
{
  "test_successful": true,
  "status_message": {}
}


// heat detected
{
  "heat_measured": 55.3,
  "status_message": {}
}


// fire detected
{
  "fire_measured": true,
  "status_message": {}
}


// smoke detected
{
  "ppm_measured": 129,
  "status_message": {}
}
