const express = require("express");
const { PORT } = require("./src/config/severConfig");

const ApiRoutes = require("./src/routes/index");

const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json()); // middleware
  app.use(bodyParser.urlencoded({ extended: true })); // middleware

  app.use("/todo", ApiRoutes); // outermost level mapping.

  app.listen(PORT, async () => {
    console.log(`Server started @port=${PORT}`);
  });
};

connectMongoose = async () => {
  try {
    const isOk = await mongoose.connect(
      "mongodb+srv://root:12345@cluster0.czoqfbz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`database connected @${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
};

setupAndStartServer();
connectMongoose();
