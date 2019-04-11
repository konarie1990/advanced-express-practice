let products = require("./products");

const list = (req, res) => res.json(products);

const show = (req, res) => {
  let userId = products.findIndex(products => {
    return products._id == req.params.id;
  });
  res.json(products[userId]);
};

const create = (req, res) => {
  products.push(req.body);
  res.send(products);
};

module.exports = {
  list,
  show,
  create
};
