
# SMS Sender

Hello this is just a demonstration to see how API works with node and with that a simple sms sending through it doesnt has any front-end you can communicate with console
This Node.js application allows you to send SMS messages using the Twilio API. It includes a simple HTML form for user input and a Node.js script (`send-sms.js`) to send the SMS.

## Prerequisites

Before running the application, ensure that you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.
- A Twilio account. You can sign up for a Twilio account [here](https://www.twilio.com/try-twilio).
- Twilio Account SID, Auth Token, and a Twilio phone number.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/AmanRembersu/sms-sender.git
   cd sms-sender

1.Install dependencies:


npm install
Create a Twilio configuration file:

Copy the .env.example file to .env and fill in your Twilio credentials:


TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

Start the application:

npm start
This will start the Node.js server.

Open your browser and navigate to http://localhost:3000 to access the SMS sender form.

Usage
Open the application in your browser.
Enter the recipient's phone number and the message in the form.
Click the "Send SMS" button.
The application will use the Twilio API to send the SMS, and you will see the status on the webpage.

Customization
Feel free to customize the application as needed. You can modify the HTML, CSS, and JavaScript files to suit your requirements.

License
This project is licensed under the aPACHE License - see the LICENSE file for details.

