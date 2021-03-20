/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const oscar = {
  quote: "“Be yourself; everyone else is already taken.",
  source: "Oscar Wilde",
};

const RWE = {
  quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. ",
  source: "Ralph Waldo Emerson",
};

const MLK = {
  quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  source: "Martin Luther King Jr.",
  citation: "A Testament of Hope: The Essential Writings and Speeches",
  year: 1986,
};

const Tolkien = {
  quote: '"I wish it need not have happened in my time," said Frodo. "So do I," said Gandalf, "and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.”',
  source: "J.R.R. Tolkien",
  citation: "The Fellowship of the Ring",
  year: 1954,
};

const lee = {
  quote: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
  source: "Harper Lee",
  citation: "To Kill A Mockingbird",
  year: 1960,
};

const Styron = {
  quote: "A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",
  source: "William Styron",
  citation: "Conversations with William Styron",
  year: 1985,
};


const quotes = [oscar, RWE, MLK, Tolkien, lee, Styron];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
  return quotes[randomNum];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let quote = getRandomQuote();
  let html = `<p class="quote">${quote.quote}</p>
              <p class="source">${quote.source}`; 
  if (typeof(quote.citation) !== "undefined") {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (typeof(quote.year) !== "undefined") {
    html += `<span class="year">${quote.year}</span>`;
  }              
  html += `</p>`;
  return html;
}

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);