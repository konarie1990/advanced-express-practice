let vehicles = require("./vehicles");

const list = (req, res) => res.json(vehicles);

const show = (req, res) => {
  let userId = vehicles.findIndex(vehicles => {
    return vehicles._id == req.params.id;
  });
  res.json(vehicles[userId]);
};

const create = (req, res) => {
  vehicles.push(req.body);
  res.send(vehicles);
};

module.exports = {
  list,
  show,
  create
};
