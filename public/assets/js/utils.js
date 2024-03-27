// calcular cantidad de productos en el carrito
export function updateQuantity(products) {
  const quantity = products.reduce((acc, product) => acc + product.quantity, 0);
  $("#shopping-car-quantity").text(quantity);
}

// calcular el total de la compra
export function updateTotal(products) {
  const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  $("#shopping-car-total").text(total);
}

// muestra los productos en el carrito
export function showProducts(products) {
  const productsElement = $('#shopping-car-products');

  productsElement.empty();

  products.forEach(product => {
    const productElement = $(`
      <div class="product">
        <div class="row">
          <div class="col">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="col">
            <div class="product-info">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <p>Cantidad: ${product.quantity}</p>
            </div>
          </div>
          <div class="col">
            <button class="btn btn-danger remove-product" data-name="${product.name}">Eliminar</button>
          </div>
        </div>
      </div>
    `);

    productElement.find('.product-info').append(`<p>Total: $${product.price * product.quantity}</p>`);
    productsElement.append(productElement);    
  });

  if (products.length === 0) {
    productsElement.append('<h3>No hay productos en el carrito</h3>');
  }
}