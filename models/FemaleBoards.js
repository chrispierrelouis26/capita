const mongoose = require("mongoose");

// save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using schema constructor , create a SnowBoardSchema object

const femaleBoardSchema = new Schema({
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
  }
});

const FemaleBoard = mongoose.model("FemaleBoard", femaleBoardSchema);

module.exports = FemaleBoard;
