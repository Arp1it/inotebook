const mongoose = require('mongoose');

const connectToMongo = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/inotebook')
    .then(() => {
      console.log('Connected to MongoDB:', mongoose.connection.readyState); // 1 indicates connected
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
};

module.exports = connectToMongo;