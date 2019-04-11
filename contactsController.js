let contacts = require("./contacts");

const list = (req, res) => res.json(contacts);

const show = (req, res) => {
  let userId = contacts.findIndex(contacts => {
    return contacts._id == req.params.id;
  });
  res.json(contacts[userId]);
};

const create = (req, res) => {
  contacts.push(req.body);
  res.send(contacts);
};

module.exports = {
  list,
  show,
  create
};
