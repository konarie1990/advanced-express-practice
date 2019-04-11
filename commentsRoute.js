let express = require("express");
let router = express.Router();
const controller = require("./commentsController");

// list
router.get("/comments", controller.list);

// show
router.get("/comments/:id", controller.show);

// post/create (post in controller file is create)
router.post("/comments", controller.create);

module.exports = router;
