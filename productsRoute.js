let express = require("express");
let router = express.Router();
const controller = require("./productsController");

// list
router.get("/products", controller.list);

// show
router.get("/products/:id", controller.show);

// post/create (post in controller file is create)
router.post("/products", controller.create);

module.exports = router;
