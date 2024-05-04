const catalog = [];

function all() {
  return [...catalog];
}

function brands() {
  let allBrands = catalog.map((item) => item.brand);
  let uniqueBrands = [...new Set(allBrands)];
  uniqueBrands.sort();
  return uniqueBrands;
}

export { all, brands };

catalog.push({
  brand: "Apple",
  model: "iPhone 15",
  variant: "Pro Max",
  price: 1200,
  id: "apple-iphone-15-pro-max"
});
catalog.push({
  brand: "Apple",
  model: "iPhone 15",
  variant: "Pro",
  price: 983.5,
  id: "apple-iphone-15-pro"
});
catalog.push({
  brand: "Huawei",
  model: "Pura 70",
  variant: "Pro Plus",
  price: 789.67,
  id: "huawei-pura70-pro-plus"
});
catalog.push({
  brand: "Samsung",
  model: "Galaxy",
  variant: "m55",
  price: 350.45,
  id: "samsung-galaxy-m55"
});
