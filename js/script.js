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
const quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    image: "img/oscar-wilde.jpeg"
  },
  {
    quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. ",
    source: "Ralph Waldo Emerson",
    image: "img/emerson.jpeg"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "A Testament of Hope: The Essential Writings and Speeches",
    year: 1986,
    image: "img/mlk.jpeg"
  },
  {
    quote: '"I wish it need not have happened in my time," said Frodo. "So do I," said Gandalf, "and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.”',
    source: "J.R.R. Tolkien",
    citation: "The Fellowship of the Ring",
    year: 1954,
    image: "img/tolkien.jpeg"
  },
  {
    quote: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
    source: "Harper Lee",
    citation: "To Kill A Mockingbird",
    year: 1960,
    image: "img/harperlee.jpg"
  },
  {
    quote: "A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",
    source: "William Styron",
    citation: "Conversations with William Styron",
    year: 1985,
    image: "img/William_Styron.jpeg"
  }
]

/***
 * `getRandomQuote` function
***/
let prevNum = 0;
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
  while (randomNum == prevNum) {
    randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
  }
  prevNum = randomNum;
  return quotes[randomNum];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let quote = getRandomQuote();
  let html = `<img class="icon" src=${quote.image}>
              <p class="quote">${quote.quote}</p>
              <p class="source">${quote.source}`;
  if (typeof(quote.citation) !== "undefined") {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (typeof(quote.year) !== "undefined") {
    html += `<span class="year">${quote.year}</span>`;
  }              
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  randomColor();
  
}


/***
 * `randomColor` function
 */
let prevColorNum = 0;
const colors = ["rgb(212, 151, 123)", "rgb(179, 123, 212)", "rgb(145, 212, 123)", "rgb(212, 123, 123)", "rgb(123, 123, 212)"];

function randomColor() {
  let randIdx = Math.floor(Math.random() * Math.floor(colors.length));
  while (randIdx == prevColorNum) {
    randIdx = Math.floor(Math.random() * Math.floor(colors.length));
  }
  prevColorNum = randIdx;
  document.body.style.background = colors[randIdx];
}

/***
 * `setInterval` function
 */
 setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);