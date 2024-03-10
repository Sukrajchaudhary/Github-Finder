const express = require("express");
const router = express.Router();
const { CreateUsers } = require("../Controllers/User.controllers");
router.get("/profile/:username", CreateUsers);
exports.router = router;
