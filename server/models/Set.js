const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedSets` array in User.js
const setSchema = new Schema({
  // saved set id from Brickset
  setID: {
    type: Number
  },
  name: {
    type: String,
  },
  // set number from Lego
  number: {
    type: Number,
  },
  theme: {
    type: String
  },
  year: {
    type: Number
  },
  image: {
    type: String,
  }
});

module.exports = setSchema;