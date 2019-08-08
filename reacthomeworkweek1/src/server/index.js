const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');

const whitelist = ['http://localhost:3002'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

app.use(cors(corsOptions));

app.get('/', function (request, response) {
  return response.json("hey");
});

app.get('/api/list', function (request, response) {
    return response.json([
      {
        id: 1,
        description: "Get out of bed",
        deadline: "2019-09-11",
        done: true
      },
      {
        id: 2,
        description: "Brush teeth",
        deadline: "2019-09-10",
        done: false
      },
      {
        id: 3,
        description: "Eat breakfast",
        deadline: "2019-09-09",
        done: false
      }
    ]);
});

app.listen(3003, function () {
    console.log('Running my server in 3003');
});
