// Stack is a collection of data that is organized in LIFO Last In First Out
// Think of a stack of dirty plates in your kitchen. You clean the top one first.

var webHistory = [];

webHistory.push("google.com");
webHistory.push("instagram.com");
webHistory.push("youtube.com");
console.log(webHistory);

webHistory.pop()
console.log(webHistory);

webHistory.shift();
console.log(webHistory);

webHistory.unshift("nytimes.com");
console.log(webHistory);
