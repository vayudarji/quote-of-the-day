const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const buttonElement = document.querySelector("button");

const quotes = [
  {
    quote: "The greatest victory is the victory over yourself.",
    author: "Plato"
  },
  {
    quote: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You can't always get what you want, but if you try sometimes you'll find that you get what you need.",
    author: "The Rolling Stones"
  },
  {
    quote: "Not all treasures are silver and gold.",
    author: "Captain Jack Sparrow"
  },
  {
    quote: "If you do what you've always done, you'll get what you've always got.",
    author: "Tony Robbins"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  }
];


function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  quoteElement.innerHTML = `<b style='font-size:25px;'>"</b>` + quote + `<b style='font-size:25px;'>"</b>` ;
  authorElement.innerHTML = "- " + author;
}

getQuote();
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const buttonElement = document.querySelector("button");

const quotes = [
  {
    quote: "The greatest victory is the victory over yourself.",
    author: "Plato"
  },
  {
    quote: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You can't always get what you want, but if you try sometimes you'll find that you get what you need.",
    author: "The Rolling Stones"
  },
  {
    quote: "Not all treasures are silver and gold.",
    author: "Captain Jack Sparrow"
  },
  {
    quote: "If you do what you've always done, you'll get what you've always got.",
    author: "Tony Robbins"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  }
];


function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  quoteElement.innerHTML = `<b style='font-size:25px;'>"</b>` + quote + `<b style='font-size:25px;'>"</b>` ;
  authorElement.innerHTML = "- " + author;
}

getQuote();
