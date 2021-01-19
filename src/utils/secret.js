const fs = require('fs');
const dotenv = require('dotenv');

if ( process.env.NODE_ENV !== 'production' ) {
    console.log('Using .env.dev file to supply config environment variables');
    dotenv.config({ path: '.env.dev' });
} else {
    console.log('Using .env.production file to supply config environment variables');
    dotenv.config({ path: '.env.production' });
}

const secret = {
  APP_NAME, PORT, NODE_ENV,
  DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD,
} = process.env;
