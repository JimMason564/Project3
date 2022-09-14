const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/legosearch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log('connected'))
.catch(e => console.log(e))

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://test1234:20sNZCUO4IbVz5mc@legoproject.hbkqcsh.mongodb.net/?retryWrites=true&w=majority",
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

module.exports = mongoose.connection;
