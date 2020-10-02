var mongoose = require('mongoose')
var config = require('./config');

module.exports.connect = () => {
    mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(()=> console.log('MongoDB connected Successfully'))
  .catch((error) => console.log('Error:',error.reason));
}