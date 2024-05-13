import "./filters.mjs"
import { displayProducts } from "./product_list_ui.mjs"
import { all, filterByBrands } from "./catalogo.mjs";

displayProducts(all());

document.querySelector("#brand-filters").addEventListener("change", onFilter);

function onFilter(event) {
  let formdata = new FormData(event.target.form)
  let brands = formdata.getAll("brand")
  let productsToDisplay = filterByBrands(brands)
  displayProducts(productsToDisplay)
}

