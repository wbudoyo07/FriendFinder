//Depencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let app = express();

let PORT = process.env.PORT ||8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});