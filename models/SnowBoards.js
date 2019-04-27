const mongoose = require("mongoose");

// save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using schema constructor , create a SnowBoardSchema object

const SnowBoardSchema = new Schema({
  boardTitle: {
    type: String
  },
  imgUrls: {
    type: String
  },
  boardName: {
    type: String
  },
  price: {
    type: Number
  },
  powder: {
    type: Number
  },
  allMountain: {
    type: Number
  },
  park: {
    type: Number
  },
});

const Snowboard = mongoose.model("snowboard", SnowBoardSchema);

module.exports = Snowboard;
