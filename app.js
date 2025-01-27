const express = require("express");
const app = express();
const accountRoutes = require('./Routers/account');
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bipin:bi12pin34@bank-api.wwl49.mongodb.net/?retryWrites=true&w=majority&appName=Bank-Api")
  .then(() => {
    console.log("Database is connected");
  })
  .catch(() => {
    console.log("Something is wrong");
  });

// Using express.json() instead of body-parser
app.use(express.json());  // This handles JSON requests

app.use('/account', accountRoutes);

module.exports = app;


