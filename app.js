import express from "express";
const app = express();
const PORT = 3000;

import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});


//ticket3
app.get("/quotes", async function (req, res) {
    const quotes = await getQuotes();
    res.json(quotes);
});


//ticket 4
app.get("/quotes/:id", async function(req, res) {
  const id = req.params.id;
  const quote = await getQuoteByID(id);
  res.json(quote);
});


app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
