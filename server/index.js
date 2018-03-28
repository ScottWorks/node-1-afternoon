const express = require('express');
const bodyParse = require('body-parser');
const mess = require(__dirname + '/controllers/messages_controller');

const app = express();

app.use(express.static(__dirname + '/../public/build'));
app.use(bodyParse.json());

const baseURL = '/api/messages';
app.post(`${baseURL}`, mess.create);
app.get(`${baseURL}`, mess.read);
app.put(`${baseURL}/:id`, mess.update);
app.delete(`${baseURL}/:id`, mess.delete);

const port = 3000;
app.listen(port, () => {
  console.log('Listening to port: ' + port);
});
