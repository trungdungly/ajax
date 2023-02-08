var p = class Product {
  static products = [];
  constructor(name, price, description, id) {
    this._name = name;
    this._price = price;
    this._description = description;
    this._id = id;
  }
  save() {
    Product.products.push(this);
  }

  static getAll() {
    return products;
  }
};

let product1 = new p("p1", "10$", "Product is one", 1);
let product2 = new p("p1", "10$", "Product is one", 1);
let product3 = new p("p1", "10$", "Product is one", 1);
let product4 = new p("p1", "10$", "Product is one", 1);
product1.save();
product2.save();
product3.save();
product4.save();

module.export = p;
// const products = [
//   { name: "p1", price: "10$", description: "Product is one", id: 1 },
//   { name: "p2", price: "11$", description: "Product is two", id: 2 },
//   { name: "p3", price: "12$", description: "Product is three", id: 3 },
//   { name: "p4", price: "13$", description: "Product is four", id: 4 },
// ];
