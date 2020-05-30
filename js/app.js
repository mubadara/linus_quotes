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
];
///Look over list elements
let quote = document.querySelector('p');

console.log(quote.innerHTML);
///Change button & body color
function changeColor() {
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
};
///Apply a click event listener for the button (& it works ffs)
let theButton = document.querySelector("button");
theButton.addEventListener("click",changeColor);