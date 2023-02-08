const express = require("express");
const session = require("express-session");

const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { nextTick } = require("process");
// const { product } = require("./model/products");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "view", "js")));

app.set("views", path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const products = [
  { name: "p1", price: "10$", description: "Product is one", id: 1 },
  { name: "p2", price: "11$", description: "Product is two", id: 2 },
  { name: "p3", price: "12$", description: "Product is three", id: 3 },
  { name: "p4", price: "13$", description: "Product is four", id: 4 },
];
let productsObj;
const port = 3000;
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: "salt for cookie signing",
  })
);
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {};
  }
  // console.log(req.session.cart);
  next();
});
app.get("/", (req, res) => {
  res.render("products", { products });
});

app.post("/addToCart", (req, res) => {
  const { name } = req.body;
  if (name in req.session.cart)
    req.session.cart[name]["quantity"] =
      (req.session.cart[name]["quantity"] || 0) + 1;
  else {
    let product = {
      price: req.body.price,
      quantity: 1,
    };
    req.session.cart[name] = { ...product };
  }
  productsObj = req.session.cart;
  res.sendStatus(200);
});
app.get("/cart", (req, res) => {
  res.render("shoppingCart", { productsObj });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
