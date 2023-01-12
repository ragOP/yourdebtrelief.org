require('dotenv').config({path: __dirname + '/.env'})
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
// const multer = require('multer');
let bodyParser = require("body-parser");
let dbConfig = require("./db");

// Express Route
const visitsRoute = require("./visits.route");

// Configure mongoDB Database
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(
  () => {
    console.log("Database successfully connected!");
  },
  (error) => {
    console.log("Could not connect to database : " + error);
  }
);

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/visits", visitsRoute);

// PORT
const PORT = process.env.DEV_PORT || 80;
app.listen(PORT, () => {
  console.log("Connected to port " + PORT);
});

// 404 Error
// app.use((req, res, next) => {
//     res.status(404).send('Error 404!')
// });

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.use(express.static(__dirname + "/public"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html", function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});