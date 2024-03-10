const express = require("express");
const router = express.Router();
const { ExplorePages } = require("../Controllers/Explore.controller");
router.get("/explore/:language", ExplorePages);

exports.router = router;
