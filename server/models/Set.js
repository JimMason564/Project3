const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedSets` array in User.js
const setSchema = new Schema({
  // saved set id from Brickset
  setID: {
    type: Integer
  },
  name: {
    type: String
  },
  // set number from Lego
  number: {
    type: Integer
  },
  theme: {
    type: String
  },
  year: {
    type: Integer
  },
  image: {
    type: String
  }
});

module.exports = setSchema;