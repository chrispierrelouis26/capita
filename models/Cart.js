const mongoose = require("mongoose");

// save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using schema constructor , create a SnowBoardSchema object

const CartSchema = new Schema({
  boardTitle: {
    type: String
  },
  imgUrls: {
    type: String
  },
  boardName: {
    type: String
  }
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;
