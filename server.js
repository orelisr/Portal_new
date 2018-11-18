const express = require("express");
//Import the mongoose module
const mongoose = require("mongoose");

//returns the express class - lets us use http request
const app = express();

const url = "mongodb://localhost:27017/PortalDB";
mongoose
  .connect(
    url,
    { useNewUrlParser: true }
  )
  .then(() => console.log("yay ! mongoDb connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.Port || 5001;

app.listen(port, () => console.log(`server running on port ${port}`));
