const fs = require('fs');
const path = require('path');

// Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//   if(err) throw err;
//  console.log('Folder created....');
//});

// Create and write a file
//fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello world', function(err) {
    //if(err) throw err;
   // console.log('File written to....');
//});

// Append file
//fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'I like Node.js', function(err) {
   // if(err) throw err;
    //console.log('file written to....');
//});

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hellworld.txt'),
    path.join(__dirname, '/test', 'nodetesting.txt'),
function(err) {
        if (err) throw err;
        console.log('File renamed....');
});