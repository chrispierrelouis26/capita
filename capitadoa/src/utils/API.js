import axios from "axios";

export default {
  getAllBoards: function() {
    return axios.get("/api/all");
  },

  getCartItems: function() {
    return axios.get("/api/cart");
  },

  getOneBoard: function() {
    return axios.get("/api/order");
  },

  getFemaleBoards: function(){
    return axios.get('/api/allfemales')
  }



  // addToCart: function(){
  //     return axios.post('/api/addboard/:id')
  // }
};
