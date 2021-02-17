const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //    if(req.url === '/') {
    //        fs.readFile(
    //        path.join(__dirname, 'public', 'index.html'), 
    //        (err,content) => {
    //            if(err) throw err;
    //            res.end(content);
    //        });
    //    }
    //    if(req.url === '/api/users') {
    //        const users = [
    //            {name: 'Bob Smith', age: 40},
    //            {name: 'John Doe', age: 30}
    //        ];
    //        res.end(JSON.stringify(users));
    //    }

    //  Build file paths which are dynamic
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index' : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check extension and set content type
    switch(extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // log the filePath
    console.log(filePath);

    // Read file
    fs.readFile(filePath, (err, content) => {
            if(err) {
                if(err.code == 'ENOENT') {
                    // Page not found
                    fs.readFile(path.join(__dirname, 'public', '404.html'), 
                    (err, content) => {
                      res.end(content, 'utf8');
                    }
                  );
                } else {
                  // Some server error
                  res.writeHead(500);
                  res.end(`Server Error: ${err.code}`);
                } 
            } else {
                // Success
                res.end(content);
            }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
