const config = require('./config/default.json')
const client = require("twilio")(config.ACCOUNT_SID_TWILIO, config.AUTH_TOKEN_TWILIO);

// client.messages
//   .create({
//      body: 'This is your personal bot',
//      from: config.FROM_TWILIO_PHONE,
//      to: config.TO_USER_PHONE
//    })
// 	.then(message => console.log(message.sid))
// 	.catch(err => console.log(err))
//   .done();


const express = require('express');
const app = express();

app.get('/receive', (req, res) => {
  res.send('Personal bot listening endpoint!');
});

app.post('/receive', (req, res) => {
  const twiml = new twilio.TwimlResponse();
  twim.message('Hi, this is personal bot');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

app.listen(8080, ()=> {
  console.log('Personal bot listening on port 8080');
});

