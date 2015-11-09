var express = require("express");
var path = require("path");
var http = require("http");

var config = require("./config/dev.js");
var index = require("./routes/index.js");

var app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// statics
app.use(express.static(path.join(__dirname, "public")));
// routes
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});
app.use("/", index);

// io
io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("disconnect", function() {
        console.log("a user disconnected");
    });
    socket.on("chat message", function(msg) {
        io.emit("chat message", msg);
    });
});

// running server
server.listen(config.port, function() {
    console.log("app listening on port %s", config.port);
});