const express = require("express");
const mongoose = require("mongoose");
const App = express();
const cors = require("cors");
const Routes = require("./Routes/Routes");
App.use(express.urlencoded({ extended: false }));
App.use(express.json());
App.use(cors());
mongoose
  .connect("mongodb://localhost:27017/JIET", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("MongoDB connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed.");
  });

App.use(Routes);

App.listen(7000, () => {
  console.log("Server is runnong on port no. 7000");
});
