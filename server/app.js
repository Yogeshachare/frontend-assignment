// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.post("/api/fetchStockData", async (req, res) => {
  // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
  const apiKey = process.env.API_KEY;
  const { ticker, date } = req.body;
  const polygonBaseUrl = "https://api.polygon.io/v2";

  try {
    const response = await axios.get(
      `${polygonBaseUrl}/aggs/ticker/${ticker}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=${apiKey}`
    );
    const data = response.data;
    if (data.resultsCount != 0) {
      res.status(200).json(data.results);
    } else {
      res.status(404).json({ success: false, error: "Enter proper Data" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
