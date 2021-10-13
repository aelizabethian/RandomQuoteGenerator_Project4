/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community


  /*Building the array of objects containing quotes and quote info. Note that few
  of the quotes actually had year/citation because I couldn't find them.
  Added an additional quote property of category */


let quotes = [
{
    quote: "The future belongs to those who believes in the beauty of their dreams",
    source: "Eleanor Roosevelt",
    category: "Inspirational"
  },

  {
    quote: "The greatest glory in living lives not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    category: "Resilience"
},

{
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    source: "Maya Angelou",
    category: "Inspirational"

  },

{
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    citation: " 'Our Destiny Remains Our Choice': President Obama's State of the Union Address",
    year: 2011,
    category: "Inspirational"
},
{

    quote: "Don't be afraid to give up the good to go for the great",
    source: "John D. Rockefeller",
    category: "Inspirational"
  },
{
    quote: "Change the way you look at things and the things you look at change.",
    source: "Wayne W. Dyer",
    year: 2015,
    category: "Resilience"
},
{
    quote: "Storms make trees take deeper roots",
    source: "Dolly Parton",
    citation: "Twitter",
    year:  2019,
    category: "Resilience"
}

]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let random = Math.floor(Math.random() * 7);
  let pick = quotes[random];
  return pick;
};


/***
 * `printQuote` function
***/

function printQuote() {

  // getting a random quote from the array of objects

  let quoteObject = getRandomQuote();
  
  /*preparing the HTML that will update so that the random quote and its info
  is correctly displayed*/

  let html = `<p class="quote">${quoteObject.quote}.</p>
  <p class="source">${quoteObject.source}`;

  let tag= `<p class="tag">${quoteObject.category}</p>`;

  // checking if there is a key for citation and year. If so, add it to the HTML
  
  if (quoteObject.citation) {
    html += ` <span class="citation">${quoteObject.citation}</span>`;
  }

  if (quoteObject.year) {
    html += ` <span class="year">${quoteObject.year}</span>`;
  }
 

  //placing the new HTML generated on each click to the file
  return document.querySelector(".quote-box").innerHTML = `${html}</p>${tag}`;
};

printQuote();


//create  background colors array and function to pull randomly from that array

let colors = [ "#3d405b", "#e07a5f", "#6d3b47", "#81b29a", "#93827f", "#1f7a8c"];
let randomNo;

function randomColor() {
  randomNo= Math.floor(Math.random()* colors.length);
  let randomBkgrd= document.querySelector("body").style.background=colors[randomNo];
  return randomBkgrd;
}

randomColor();

//Make two events happen at button click - background change and load quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('body').addEventListener("click", randomColor, false);

//create Set Intervals to change both quote and background color every 10s
setInterval(printQuote, 10000);
setInterval(randomColor, 10000);

