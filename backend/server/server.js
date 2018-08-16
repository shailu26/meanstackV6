/**
 * Main application file
 */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {init} from './routes';
import config from './config';

const port = process.env.PORT || 3000;

// App Setup
const app = express();

app.use(cors());
app.use(bodyParser.json());

// calling routes
init(app);

// Mongo Connection
const uri = "mongodb://shail:shail123@ds219432.mlab.com:19432/meanstack" || config.all.mongo.uri;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`connected to db: ${uri}`)
});

connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});
// This event is fired when the process is closed.
process.on('SIGINT', function() {
    connection.close(function() {
    console.log("Mongoose default connection is disconnected due to application termination");
    process.exit(0);
    });
})

// App listen
app.listen(port, () => {
    console.log(`express server running on port ${port}`);
});

export default app;