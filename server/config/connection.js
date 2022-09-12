const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://test1234:20sNZCUO4IbVz5mc@legoproject.hbkqcsh.mongodb.net/?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
