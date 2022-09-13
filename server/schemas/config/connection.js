const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://test1234:20sNZCUO4IbVz5mc@legoproject.hbkqcsh.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
)
  .then(() => console.log('connected'))
  .catch(e => console.log(e))

module.exports = mongoose.connection;