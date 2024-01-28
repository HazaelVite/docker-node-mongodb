// Archivo para mongoDB
const mongose = require('mongose');
const HOST = 'mongo';
const DB_NAME = 'mydatabase'
mongose.connect('mongodb://mongo/mydatabase')
    .then(db => console.log('DB is connect to', db.conection.host ))
    .catch(err => console.error(err));
