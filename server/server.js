const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const path = require('path');
// Passport config
require("./controllers/user")(passport);


// DB config
const db = require("./config/connection").MongoURI;

// Connection to Mongo
mongoose.connect(db , { useNewUrlParser: true })
.then(() => console.log("You've connected to the MonGod"))
.catch(err => console.log(err));

// BodyParser
app.use(express.urlencoded({ extended: false }))

// Express Session MiddleWare
// app.set("trust proxy", 1) // trust first proxy
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// Passport MiddleWare
app.use(passport.initialize());
app.use(passport.session());


// Connect Flash
app.use(flash());

// req.flash global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("sucess_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});


// Routes
app.use("/users", require("./routes/user"));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

// Connection to Localhost
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
