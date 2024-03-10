require("dotenv").config();
const { ConnectToDb } = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const {GithubPassword} =require("../backend/Passport/github.auth");
const session = require('express-session');
const passport = require("passport");
const bodyParser=require("body-parser");
const userRouter=require("./Routes/User.routes");
const authRouter=require("./Routes/Auth.routes");
const exploreRouter=require("./Routes/Explore.routes")
// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  cors({
    origin: true,
  })
);
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use("/api/user",userRouter.router);
app.use("/api/auth",authRouter.router);
app.use("/api",exploreRouter.router);
GithubPassword(passport);
ConnectToDb();
app.listen(process.env.PORT, () => {
  console.log("App is running on Port 8080");
});
