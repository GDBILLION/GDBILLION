//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//quotes
const quotes = [{
    quote : `"The best way to find yourself is to lose yourself in the company of others."`,
    person : `Mahatma Ghandi`
},
{
    quote : `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person : `Albert Einstein`
},
{
    quote : `"At his best, man is the noblest of all animals; separated from law and justice, 
                he is the worst."`,
    person : `Aristotle`
},
{
    quote : `"Your time is limited, so don't waste it living someone else's life."`,
    person : `Steve Jobs`
},
{
    quote :`"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person :`Benjamin Franklin`
},
{
    quote : `"Failure is Success in Progress."`,
    person :`Albert Einstein`
},
];

//Eventlistener

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText = quotes[random].person;
})