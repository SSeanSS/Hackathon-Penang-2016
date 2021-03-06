// Example web server application
// Change conf.userid and conf.password respectively
// devEUI is the name for the socket channel, can be any string, you can simply use your device EUI

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

// Run the webserver on port 8080
app.listen(8080);

var WebSocket = require("ws");
var convert = require("./convert");

var conf = {
    host: "guestnet-malaysia.orbiwise.com",
    port: null,
    userid: "YOUR_USER_ID",
    password: "YOUR_PASSWORD"
};

var devEUI = 'YOUR_DEVEUI';

var url = "wss://" + conf.host + (conf.port != null ? ":" + conf.port : "") + "/websocket/connect";

var ws = new WebSocket(url, {
    headers: {
        Authorization: "Basic " + new Buffer(conf.userid + ":" + conf.password).toString("base64")
    }
});

console.log(url);

ws.on('open', function () {
    console.log("WEB-SOCKET: OPEN");
});

ws.on('error', function (err) {
    console.log("WEB-SOCKET: ERROR");
    console.log(err);
});

ws.on('message', function (data, flags) {

    try {
        data = JSON.parse(data);
        console.log("Received data on websocket");
        console.log(data);
	
	if(data.payloads_ul.dataFrame){
		var converted = convert.convert(data.payloads_ul.dataFrame);
		console.log(converted);
		data.payload = converted;
		io.to(devEUI).emit('uplink', data);
	}
	
    } catch (e) {
        console.log("ERROR in websocket push data - can't parse JSON");
    }

});

process.on('exit', function(){
	console.log("Close websocket");  
	ws.close();
});

// Serve the index.html file
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

// Add Socket.io clients to the appEUI room
io.on('connection', function (socket) {
  socket.join(devEUI);
});
