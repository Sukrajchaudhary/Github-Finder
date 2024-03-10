const express = require("express");
const router = express.Router();
const { CreateUsers } = require("../Controllers/Auth.controllers");
const passport = require("passport");
router
  .get("/github", passport.authenticate("github", { scope: ["user:email"] }))
  .get(
    "/github/callback",
    passport.authenticate("github", {
      failureRedirect: process.env.Client_Base_URL + "/login",
    }),
    CreateUsers
  )
  .get("/logout", (req, res) => {
    req.session.destroy((err) => {
      res.json({
        message: "Loggedout",
      });
    });
  })
  .get("/check", (req, res) => {
    if (req.isAuthenticated()) {
      res.send({ user: req.user });
    } else {
      res.send({ user: null });
    }
  });
exports.router = router;
