const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const movieRoutes = require("./routes/index");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("/", movieRoutes);

module.exports = app;
