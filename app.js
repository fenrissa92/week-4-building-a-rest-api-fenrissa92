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
  const { id } = req.params;
  const quote = await getQuoteByID(id);
  if (!quote) {
    req.statusCode(404).send("Quote not found");
  }
  res.json(quote);
});

//ticket 5

//create a new quote
//listen for post request path /quotes
app.post("/quotes", async function (req, res) {
//when we recieve, 
const { quoteText, author } = req.body;
/*
above is combine of these two:
const quoteText = req.body.quoteText;
const author = req.body.author;
*/
//create a new quote object
//add the quote to the quotes
const newQuote = await addQuote(quoteText, author);
//respond with the new quote
res.status(201).json(newQuote);
})


//ticket 6

//update a quote
//listen to a PATCH request
//path of /quotes/:id
//when we receive a request
//get the id
//get the information to update
//update the quote with that id
//respond with the updated quote




app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
