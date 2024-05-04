import { brands } from "./catalogo.mjs";

const form = document.querySelector("#brand-filters")

function createCheckBoxes() {
  for (let brand of brands()) {
    // console.log(brand)
    let label = document.createElement("label")
    label.innerHTML = `<input type="checkbox" name="brand" value="${brand}">
                        ${brand}`
    form.appendChild(label)
  }

}

createCheckBoxes()
