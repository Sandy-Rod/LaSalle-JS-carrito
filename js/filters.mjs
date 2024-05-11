import { brands } from "./catalogo.mjs";

const form = document.querySelector("#brand-filters")

function createCheckBoxes() {
  for (let brand of brands()) {
    form.insertAdjacentHTML(`
      <label>
        <input type="checkbox" name="brand" value="${brand}">
        ${brand}
      </label>
    `)
  }

}

createCheckBoxes()
