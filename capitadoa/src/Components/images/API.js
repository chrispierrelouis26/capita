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
  },

  getMostExpensive: function(){
    return axios.get('/api/largest')
  }
,
getLeastExpensive: function(){
  return axios.get('/api/smallest')
}
,
getPowder: function(){
  return axios.get('/api/powder')
},

getMountain: function(){
  return axios.get('/api/mountain')
},

getParkLevel: function(){
  return axios.get("/api/parklevel")
}


  // addToCart: function(){
  //     return axios.post('/api/addboard/:id')
  // }
};
