// Product list User Interface

const template = document.querySelector("#product-item-template")
const target = document.querySelector("#product-list")

function displayProducts(products) {
  target.innerHTML = ""
  for (let product of products) {
    console.log(product)

    // Crear un elemento nuevo li que es una copia de los elementos que son necesarios
    // y meterlo dentro de target
    console.log(template.content.firstElementChild)
    let item = template.content.firstElementChild.cloneNode(true)

    let hbTemplate = Handlebars.compile(item.outerHTML);
    let output = hbTemplate(product, {allowProtoPropertiesByDefault: true})

    target.appendChild(item)
    item.outerHTML = output
    console.log(item)
  }
}


export { displayProducts }
