let express = require("express");
let router = express.Router();
const controller = require("./vehiclesController");

// list
router.get("/vehicles", controller.list);

// show
router.get("/vehicles/:id", controller.show);

// post/create (post in controller file is create)
router.post("/vehicles", controller.create);

module.exports = router;
