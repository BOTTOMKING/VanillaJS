const quotes = [
    {
        quote: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
        author: "Willie Nelson"
    },
    {
        quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        author: "Kobe Bryant"
    },
    {
        quote: "Find a place inside where there's joy, and the joy will burn out the pain.",
        author: "Joseph Campbell"
    },
    {
        quote: "In order to carry a possible action we must develop here a positive vision.",
        author: "Dalai Lama"
    },
    {
        quote: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        author: "Lyndon B. Johnson"
    },
    {
        quote: "Keep your face to the sunshine and you cannot see a shadow.",
        author: "Helen Keller"
    },
    {
        quote: "Live life to the fullest, and focus on the positive",
        author: "Matt Cameron"
    },
    {
        quote: "Every day brings new choices.",
        author: "Martha Beck"
    },
    {
        quote: "Positive anything is better than negative nothing.",
        author: "Elbert Hubbard"
    },
    {
        quote: "A strong, positive self-image is the best possible preparation for success.",
        author: "Joyce Brothers"
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;