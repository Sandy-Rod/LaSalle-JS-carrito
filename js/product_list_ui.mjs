// Product list User Interface

import { all } from "./catalogo.mjs";

const template = document.querySelector("#product-item-template")
const target = document.querySelector("#product-list")

function displayProducts() {
  for (let product of all()) {
    console.log(product)

    // Crear un elemento nuevo li que es una copia de los elementos que son necesarios
    // y meterlo dentro de target
    let item = document.importNode(template.content, true)


    // selecccion de todos los atributos data-field
    for (let element of item.querySelectorAll("[data-field]")) {
      let field = element.dataset.field
      // dataset recoge los atributos data y como tenemos data-field
      // dentro de field encontraremos cada elemento
      // en cada repeticion tratamos un elemento "dd"

      let value = product[field] // acceder a un objeto
      // equivalente a: product.brand si field fuera "brand"


      element.innerText = value //innerText pondrá el texto dentro de los tags <dd>

    }

    target.appendChild(item)
  }
}


export { displayProducts }
