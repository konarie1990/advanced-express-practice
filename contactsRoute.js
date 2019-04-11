let express = require("express");
let router = express.Router();
const controller = require("./contactsController");

// list
router.get("/contacts", controller.list);

// show
router.get("/contacts/:id", controller.show);

// post/create (post in controller file is create)
router.post("/contacts", controller.create);

module.exports = router;
