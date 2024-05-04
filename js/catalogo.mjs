import data from "./data.mjs"

class Product {
  constructor(data) {
    this.brand = data.brand
    this.model = data.model
    this.variant = data.variant
    this.price = data.price
    this.id = data.id
  }
  get pictureURL() {
    return `./img/${this.id}.jpeg`
  }
}

const catalog = data.map(function (item) {
  return new Product(item)
});

function all() {
  return [...catalog];
}

function filterByBrands(brands) {
  if (brands.length === 0) {
    return all()
  }
  return catalog.filter(function (product) {
    console.log(product, brands, brands.includes(product.brand))
    return brands.includes(product.brand)
  })
}

function brands() {
  let allBrands = catalog.map((item) => item.brand);
  let uniqueBrands = [...new Set(allBrands)];
  uniqueBrands.sort();
  return uniqueBrands;
}

export { all, brands };
export { filterByBrands }
