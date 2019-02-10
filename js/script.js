/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
completed by Vinson
******************************************/

// Quotes
var quotes = [
  {
      quote: "The important thing is not to stop questioning. Curiosity has its own reason for existence. " +
      "One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. " +
      "It is enough if one tries merely to comprehend a little of this mystery each day.",
      citation: "Old Man's Advice to Youth: 'Never Lose a Holy Curiosity.' LIFE Magazine (2 May 1955) p. 64",
      source: "Albert Einstein",
      year: 1955,
      tags: ['science', 'philosophy']
  },
  {
      quote: "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.",
      source: "Abraham Maslow",
      citation: "Toward a Psychology of Being",
      tags: ['philosophy', 'construction?']
  },
  {
      quote: "The truth knocks on the door and you say, \"Go away, I'm looking for the truth,\" and so it goes away. Puzzling.",
      source: "Robert M. Pirsig",
      citation: "Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values",
      year:  2006,
      tags: ['philosophy', 'novel']
  },
  {
      quote: "The only true wisdom is that you know nothing",
      source: "Socrates"
  },
  {
      quote: "The eye sees only what the mind is prepared to comprehend.",
      source: "Robertson Davies",
      citation: "Temptest-Tost",
      year: 1980,
      tags: ['education']
  }
]

// Returns a random quote
function getRandomQuote() {
  var randomNum = Math.floor(Math.random()*quotes.length);  //create random index of quote
  return quotes[randomNum];
}

// Change background to random color
function changeBackgroundColor() {
  // create color
  var rgb = [];
  for(i = 0; i < 4; i++){
    rgb[i] = Math.floor(Math.random()*255);
  }

  //change background
  document.body.style.backgroundColor = 'rgba('+ rgb[0]+', '+ rgb[1]+', '+ rgb[2]+', '+ rgb[3]+')';
  document.getElementById('loadQuote').style.backgroundColor = 'rgba('+ rgb[0]+', '+ rgb[1]+', '+ rgb[2]+', '+ rgb[3]+')';
}


// Creates an HTML string and sets innerHTML of 'quote-box' div
function printQuote() {
  var quoteToPrint = getRandomQuote();
  var html = '';

  //create string
  html += '<p class="quote">' + quoteToPrint.quote+ '</p>';
  html += '<p class="source">' + quoteToPrint.source + '</p>';
  if ('citation' in quoteToPrint){html += '<span class="citation">' + quoteToPrint.citation + '</span>';}
  if ('year' in quoteToPrint){html += '<span class="year">' + quoteToPrint.year + '</span>';}
  if ('tags' in quoteToPrint){
    var tag;
    html += '<span class="year">';
    for (i = 0; i < quoteToPrint.tags.length; i += 1){
      tag = quoteToPrint.tags[i];
      html +=  '['+tag + '] ';
    }
    html += '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;

  changeBackgroundColor();

  // Start timer to refresh quote
  clearTimeout(timeout); //clear timeout so we don't have multiple timers
  timeout = setTimeout(function(){printQuote();}, 10000);
}


// Start timer to refresh quote
var timeout =setTimeout(function(){printQuote();}, 10000);


// loads new quote when button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);