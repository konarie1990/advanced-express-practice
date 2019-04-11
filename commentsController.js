let comments = require("./comments");

const list = (req, res) => res.json(comments);

const show = (req, res) => {
  let userId = comments.findIndex(comments => {
    return comments._id == req.params.id;
  });
  res.json(comments[userId]);
};

const create = (req, res) => {
  comments.push(req.body);
  res.send(comments);
};

module.exports = {
  list,
  show,
  create
};
