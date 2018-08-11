const config = require('./config/default.json')
const client = require("twilio")(config.ACCOUNT_SID_TWILIO, config.AUTH_TOKEN_TWILIO);

client.messages
  .create({
     body: 'This is your personal bot',
     from: config.FROM_TWILIO_PHONE,
     to: config.TO_USER_PHONE
   })
	.then(message => console.log(message.sid))
	.catch(err => console.log(err))
  .done();



