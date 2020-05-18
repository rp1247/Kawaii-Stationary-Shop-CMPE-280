// Required Modules
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// Initializating variables
const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false })); //Allows us to get data into our req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Products list
products = [
  {
    id: "Diary",
    details: {
      name: "Diary",
      description:
        " Shopping lists, school notes or poems - 120 page spiral notebook with ruled line paper is a perfect companion in everyday life.",
      price: 10,
      avgRating: 4,
      img: "Dairy.jpeg"
    }
  },
  {
    id: "GlitterDust",
    details: {
      name: "Glitter Dust",
      description:
        "A nice rounded ice cube - the perfect size for your 1:6 playscale dolls!",
      price: 3,
      avgRating: 4.5,
      img: "GlitterDust.jpeg"
    }
  },
  {
    id: "CartoonCableProtector",
    details: {
      name: "Cartoon Cable Protector",
      description:
        " Cute cartoon patterns look young and energetic. It is for your phone USB cord protector, to make it not easily broken and use longer time.",
      price: 7,
      avgRating: 4.2,
      img: "CartoonCableProtector.jpeg"
    }
  },
  {
    id: "WashiTape",
    details: {
      name: "Washi Tape",
      description:
        " Decorative washi tapes originated from mt (meaning Masking Tape) brand, produced by Kamoi Kakoshi. Established in 1923, this company is based in Kurashiki, Okayama prefecture in Japan.",
      price: 8,
      avgRating: 4.7,
      img: "WashiTape.jpeg"
    }
  },
  {
    id: "StickyNotes",
    details: {
      name: "Sticky Notes",
      description:
        " These layered sticky notes are decorate with subtle Japanese style illustrations of nature and animals. ",
      price: 5,
      avgRating: 3.5,
      img: "StickyNotes.jpeg"
    }
  },
  {
    id: "Marker",
    details: {
      name: "Marker",
      description:
        " Cute cartoon patterns look young and energetic. It is for your phone USB cord protector, to make it not easily broken and use longer time.",
      price: 14,
      avgRating: 4,
      img: "Marker&Highlighters.jpeg"
    }
  }
];

// Setting up API
app.get("/products", (req, res) => {
  res.send(products);
});

// Listening to server (Starting server)
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
