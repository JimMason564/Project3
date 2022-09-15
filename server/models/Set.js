const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's savedSets array in User.js
const setSchema = new Schema({
  // saved set id from Brickset
  Item_Number: {
    type: Number
  },
  Name: {
    type: String
  },
  // set number from Lego
  Year: {
    type: Number
  },
  Theme: {
    type: String
  },
  Pieces: {
    type: Number
  },
  Image_URL: {
    type: String
  }
});

module.exports = setSchema; 
