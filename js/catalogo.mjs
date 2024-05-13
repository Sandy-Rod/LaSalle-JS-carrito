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

const conversorDeObjectoPlanoAProduct = item => new Product(item)
const catalog = data.map(conversorDeObjectoPlanoAProduct)


function all() {
  return [...catalog];
}

filterByBrands([])

function filterByBrands(brands) {
  if (brands.length === 0) {
    return all()
  } else {
    function brandFilter(product) {
      return brands.includes(product.brand)
    }

    return catalog.filter(brandFilter)
  }
}

function filterByPrice(min, max) {
  function priceRangeFilter(product) {
    return product.price >= min && product.price <= max
  }

  return catalog.filter(priceRangeFilter)
}

function filterByTextInBrandModelVariant(query) {
  let tokens = query.split().map(str => str.toLowerCase())
  function textFilter(product) {
    return tokens.every(token => product.brand.toLowerCase().includes(token) || product.model.toLowerCase().includes(token))
  }
}

function brands() {
  let allBrands = catalog.map((item) => item.brand);
  let uniqueBrands = new Set(allBrands)
  let arrayOfUniqueBrands = [...uniqueBrands];
  arrayOfUniqueBrands.sort();
  return arrayOfUniqueBrands;
}

export { all, brands, filterByBrands }
