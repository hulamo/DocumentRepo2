const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const users = require("./routes/api/users");
const folders = require("./routes/api/folders");
const files = require("./routes/api/files");

const friends = require("./routes/api/friends");

const app = express();



// Bodyparser middleware
app.use(
    bodyparser.urlencoded({
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

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://hulamo:33128284@cluster0-xjcwz.mongodb.net/test?retryWrites=true&w=majority");


//const port = process.env.PORT || 5000;


app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});