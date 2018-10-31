var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);
    if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars/new") {
        fs.readFile('views/new.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
        // < --------- IMAGES --------- >
    } else if (request.url === '/images/court-prather-603203-unsplash.jpg') {
        fs.readFile('./images/court-prather-603203-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/hyunwon-jang-594588-unsplash.jpg') {
        fs.readFile('./images/hyunwon-jang-594588-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/neonbrand-264286-unsplash.jpg') {
        fs.readFile('./images/neonbrand-264286-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/jason-leung-729287-unsplash.jpg') {
        fs.readFile('./images/jason-leung-729287-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/kote-puerto-771605-unsplash.jpg') {
        fs.readFile('./images/kote-puerto-771605-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/kazuky-akayashi-702563-unsplash.jpg') {
        fs.readFile('./images/kazuky-akayashi-702563-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/eric-han-455080-unsplash.jpg') {
        fs.readFile('./images/eric-han-455080-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/raoul-droog-771488-unsplash.jpg') {
        fs.readFile('./images/raoul-droog-771488-unsplash.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/bg.jpg') {
        fs.readFile('./images/bg.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
        // < --------- CSS --------- >
    } else if (request.url === '/stylesheets/main.css') {
        fs.readFile('./stylesheets/main.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/css'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/stylesheets/bootstrap.min.css') {
        fs.readFile('./stylesheets/bootstrap.min.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/css'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/stylesheets/font-awesome.min.css') {
        fs.readFile('./stylesheets/font-awesome.min.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/css'
            });
            response.write(contents);
            response.end();
        });
    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");
