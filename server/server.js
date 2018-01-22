import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {

  if (req.url === '/') req.url = '/index.html';
  if ((req.url.substr(req.url.length - 3) === '.js'
      || req.url.substr(req.url.length - 4) === '.map')
    && req.url.substr(0, 6) === '/dist/'
  ) {
    req.url = req.url.substr(1);
    fs.access(req.url, (err) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream(req.url).pipe(res);
      } else {
        console.log('no access!', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
      }
    });
  } else {
    fs.access('src/pages' + req.url, (err) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('src/pages' + req.url).pipe(res);
      } else {
        console.log('no access!', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
      }
    });
  }

}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
