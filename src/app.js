const express = require('express');

require('dotenv').config();

const app = express();
app.use(express.json({limit: '20mb'} ));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
const port = process.env.PORT;

const mediaRouter = require('./routes/media');

app.use('/media', mediaRouter);

app.listen(port, () => { 
    console.log(`Server is Running on port : ${port}`);
});