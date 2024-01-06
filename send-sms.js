const twilio = require('twilio');

const accountSid = 'AC27542f8e0a8e7f6c199c728beb8fe355';
const authToken = '4e3ccc5ff23da71c89fd398ad388f768';
const twilioNumber = '+12017718349';

const client = new twilio(accountSid, authToken);

const recipientNumber = process.argv[2]; // Take phone number as command line argument
const message = 'Congratulations! Your operation was successful.';

client.messages
  .create({
     body: message,
     from: twilioNumber,
     to: recipientNumber
   })
  .then(message => console.log('SMS sent successfully:', message.sid))
  .catch(error => console.error('Error sending SMS:', error.message));

  //4e3ccc5ff23da71c89fd398ad388f768
  //node send-sms.js +918010479236
