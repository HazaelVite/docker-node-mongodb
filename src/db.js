// Archivo para mongoDB
const mongoose = require('mongoose');
const HOST = 'mongo';
const DB_NAME = 'mydatabase'
mongoose.connect('mongodb://mongo/mydatabase')
    .then(db => console.log('DB is connect to', db.connection.host ))
    .catch(err => console.log('MongoDB no conecto :c ', err));
