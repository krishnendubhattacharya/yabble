var mongoose = require('mongoose');
mongoose.connect('mongodb://108.179.225.244:27017/yabble');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("open");
});	
