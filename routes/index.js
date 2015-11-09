var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
	// render something
	res.render("index", {title: "Find a climbing partner"});
});
module.exports = router;