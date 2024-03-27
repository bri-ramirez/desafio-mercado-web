import { getProducts, saveProduct, removeProduct } from "./storage.js";
import { updateQuantity, updateTotal, showProducts } from "./utils.js";

function updateAllElements() {
  const products = getProducts();
  updateQuantity(products);
  updateTotal(products);
  showProducts(products);
}

$(function() {
  // ejecutamos la función al principio en caso de que hayan productos en el local storage
  updateAllElements();
});

// evento para eliminar un producto del carrito
$(document).on('click', '.remove-product', function() {
  const name = $(this).data('name');
  removeProduct(name);
  updateAllElements();
});

$('.add-product').on('click', function() {
  // estos datos los obtenemos del botón que se clickeó
  const name = $(this).data('name');
  const price = $(this).data('price');
  const image = $(this).data('image');

  // creamos un objeto con los datos del producto
  const product = {
    name,
    price,
    image,
  };

  // guardamos el producto en el local storage
  saveProduct(product);
  updateAllElements();
});

