/**
 * Created by MrHant on 05.10.2015.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {

    if (req.url == '/') {
        //info = fs.readFileSync('index.html');
        fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("На сервере ошибка!");
                return;
            }

            res.end(info);
        });
        //res.end(info);
    }

    process.nextTick(function () {
        console.log('nextTick');
    });

}).listen(1337);

setTimeout(function () {
    server.close();
}, 2500);

var timer = setInterval(function () {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();