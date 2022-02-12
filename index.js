"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var crmRoutes_1 = require("./src/routes/crmRoutes");
var app = express();
var PORT = 3000;
var mlabUser = 'root';
var mlabPass = 'root';
var dataConnection = function (user, pass) {
    return "mongodb+srv://".concat(user, ":").concat(pass, "@cluster0.q34li.mongodb.net/linkedinDB?retryWrites=true&w=majority");
};
var database = dataConnection(mlabUser, mlabPass);
mongoose.connect(database, {
//useMongoClient:true
});
// bodyparser setup */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
(0, crmRoutes_1["default"])(app);
// serving static files
app.use(express.static('public'));
app.get('/', function (req, res) {
    return res.send("Node and express server is running on port ".concat(PORT));
});
app.listen(PORT, function () {
    return console.log("your server is running on port ".concat(PORT));
});
