///Initialize quotes array
let quotesArr = [
    "A computer is like air conditioning - it becomes useless when you open Windows",
    "I like offending people, because I think people who get offended should be offended.",
    "All operating systems sucks, but Linux just sucks less",
    "Those that can, do. Those that can't, complain.",
    "We all know Linux is great...it does infinite loops in 5 seconds.",
    "Nobody actually creates perfect code the first time around, except me. But there's only one of me.",
    "Don't hurry your code. Make sure it works well and is well designed. Don't worry about timing.",
    "People who are doing things for fun do things the right way by themselves.",
    "When you say 'I wrote a program that crashed Windows,' people just stare at you blankly and say 'Hey, I got those with the system, for free.'",
    "Software is like sex: It's better when it's free.",
    "Bill Gates really seems to be much more of a business man than a technologist, while I prefer to think of Linux in technical terms rather than as a means to money.",
    "One of the reasons I like open source is that it allows people to work on the parts they are good at, and I don't mean just on a technical level; some people are into the whole selling and support, and that's just not me.",
    "The thing with Linux is that the developers themselves are actually customers too: that has always been an important part of Linux.",
    "That's what makes Linux so good: you put in something, and that effort multiplies. It's a positive feedback cycle.",
    "Given enough eyeballs, all bugs are shallow.",
    "I'm generally a very pragmatic person: that which works, works.",
    "My name is Linus, and I am your God.",
    "This 'users are idiots, and are confused by functionality' mentality of Gnome is a disease. If you think your users are idiots, only idiots will use it.",

];
///Change button & body color
function changeEverything() {
    ///Initialize random color
    let color1 = Math.round((Math.random() * 256)+1);
    let color2 = Math.round((Math.random() * 256)+1);
    let color3 = Math.round((Math.random() * 256)+1);
    let color = `rgb(${color1}, ${color2}, ${color3})`;
    ///select body
    let body = document.querySelector('body');
    //select button
    let button = document.querySelector('button');
    ///change color
    body.style.backgroundColor = color;
    button.style.backgroundColor = color;
    //Select quote
    let quote = document.querySelector('p');
    //Change quote
    quote.textContent = quotesArr[Math.floor((Math.random()*quotesArr.length))];
    //change quote color
    quote.style.color = color;
};
///Apply a click event listener for the button (& it works ffs)
let theButton = document.querySelector("button");
theButton.addEventListener("click",changeEverything);