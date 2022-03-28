const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(3005, () => console.log('listening at PORT 3005'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      alert('error, yo!');
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  console.log('I got a request!');
  const data = request.body;
  const timestamp = Data.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});
