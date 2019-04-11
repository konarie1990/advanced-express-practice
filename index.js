const express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehiclesRoute = require("./vehiclesRoute");
let contactsRoute = require("./contactsRoute");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", contactsRoute);
app.use("/", vehiclesRoute);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});

app.get("/comments", (req, res) => res.json(comments));

app.get("/products", (req, res) => res.json(products));

// app.get("/vehicles", (req, res) => res.json(vehicles));

// app.get("/contacts", (req, res) => res.json(contacts));

// Create routes to one record
app.get("/comments/:id", (req, res) => {
  let userId = comments.findIndex(comments => {
    return comments._id == req.params.id;
  });
  res.json(comments[userId]);
});

app.get("/products/:id", (req, res) => {
  let userId = products.findIndex(products => {
    return products._id == req.params.id;
  });
  res.json(products[userId]);
});

// app.get("/vehicles/:id", (req, res) => {
//   let userId = vehicles.findIndex(vehicles => {
//     return vehicles._id == req.params.id;
//   });
//   res.json(vehicles[userId]);
// });

// app.get("/contacts/:id", (req, res) => {
//   let userId = contacts.findIndex(contacts => {
//     return contacts._id == req.params.id;
//   });
//   res.json(contacts[userId]);
// });

// Create routes to create a new record

app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.send(comments);
});

app.post("/products", (req, res) => {
  products.push(req.body);
  res.send(products);
});

// app.post("/vehicles", (req, res) => {
//   vehicles.push(req.body);
//   res.send(vehicles);
// });

// app.post("/contacts", (req, res) => {
//   contacts.push(req.body);
//   res.send(contacts);
// });
