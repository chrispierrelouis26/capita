
const axios = require("axios");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const cors = require("cors");
const db = require("./models/index");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const path = require("path");

app.use(cors());
const router = express.Router();

//connecting to mongodb
mongoose.connect("mongodb://localhost/capitastore", { useNewUrlParser: true });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//GET REQUESTS
//intial get
app.get("/api/home", (req, res) => {
  res.send("hello world");
});

//Getting what i need from capita
app.get("/scrape", (req, res) => {
  axios
    .get("https://www.capitasnowboarding.com/mens")
    .then(function(response) {
      //loading data into cheerio and sav it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
      $("div.product-snowboard__teaser").each(function(i, element) {
        // Save the text of the element in a "title" variable
        var boardTitle = $(element)
          .find("a")
          .find("div")
          .find("div.id")
          .text();
        var imgUrl = $(element)
          .find("a")
          .find("img")
          .attr("src");
        const boardName = $(element)
          .find("a")
          .find("div")
          .children()
          .eq(1)
          .html();

        if (boardTitle && imgUrl && boardName) {
          db.Snowboard.create({
            boardTitle: boardTitle,
            imgUrl: imgUrl,
            boardName: boardName
          }),
            function(err, inserted) {
              if (err) {
                console.log(err);
              }
            };
        }
      });

      res.send("scrape complete");
    })
    .catch(function(err) {
      // If an error occurred, log it
      console.log(err);
    });
});

//getting all the data from scrape

app.get("/api/all", (req, res) => {
  db.Snowboard.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

//sorting by id

app.get("/api/order", (req, res) => {
  db.Snowboard.find()
    .sort({ boardName: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
});

app.get("/api/cart", (req, res) => {
  db.Cart.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

//grabbing snowboard by id
// create new collection with the data

app.get("/api/snowboard/:id", (req, res) => {
  db.Snowboard.findById({ _id: req.params.id })
    .then(function(data) {
      db.Cart.create({
        boardTitle: data.boardTitle,
        imgUrls: data.imgUrls,
        boardName: data.boardName
      }),
        function(err, inserted) {
          if (err) {
            console.log(err);
          }
        };

      return res.json(data);
    })
    .catch(function(err) {
      // If an error occurred, log it
      console.log(err);
    });
});

// POST REQUESTS
// POST request to add specific item to cart

app.post("/api/addboard/:id", (req, res) => {
  db.Snowboard.findById({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
});

app.listen(PORT, () => {
  console.log(`server is up, app listening on ${PORT}`);
});
