const express = require("express");
const routes = require("./src/routes");
const app = express();
const mongoose = require("mongoose");
const port = 3001;
let cors = require("cors");

// Parse JSON bodies (as sent by API clients)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use routes to use routes in app.js
app.use(routes);

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://tanayraikuwar26:Tanay123@cluster0.j2sstxk.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
let server = app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);
