const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.node.js?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Pathname
console.log(myUrl.pathname);

//Serialiezed query
console.log(myUrl.search);

// Parameters object
console.log(myUrl.searchParams);

// Add Parameters object
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));