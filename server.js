const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const users = require("./routes/api/users");
const folders = require("./routes/api/folders");
const files = require("./routes/api/files");
const path = require("path");

const friends = require("./routes/api/friends");
//const MONGOURIDB = require("./mongouri");

const app = express();

//const MONGOURIDB = mongouri.MONGOURIDB;
//console.log("MONGOURIDB" + MONGOURIDB)

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));


}

/*
 
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));


// Express serve up index.html file if it doesn't recognize route
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}
*/

// Connect to MongoDB
/*
mongoose
    .connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
*/

// Passport middleware

app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes

app.use("/api/friends", friends);
app.use("/api/users", users);

app.use("/api/folders", folders);
app.use("/api/files", files);
/*
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "/client/public/index.html"), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}) */

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://hulamo:33128284@cluster0-xjcwz.mongodb.net/test?retryWrites=true&w=majority");


//const port = process.env.PORT || 5000;


app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});