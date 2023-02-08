const Product = require("../models/product");
exports.getAllProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.saveProduct = (req, res, next) => {
  const prod = new Product(req.body.title);
  prod.save();
  res.redirect("/");
};
exports.getAllProduct = (res, next) => {
  res.render("shop", {
    prods: Product.getAll(),
    pageTitle: "Shop",
    path: "/",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
