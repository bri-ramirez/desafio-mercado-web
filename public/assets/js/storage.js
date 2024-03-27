// Obtiene los productos del local storage
export function getProducts() {
  let products = localStorage.getItem('products');

  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
}

// guarda el producto en el local storage
export function saveProduct(product) {
  // obtener el listado de productos del local storage
  let products = getProducts();

  // verificamos si existe el producto en el listado
  const existProduct = products.find(p => p.name === product.name);

  // si existe
  if (existProduct) {
    existProduct.quantity = existProduct.quantity + 1;
    localStorage.setItem('products', JSON.stringify(products));
    return;
  }
  // si no existe, lo agregamos al listado
  product.quantity = 1;
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}

// elimina un producto del local storage
export function removeProduct(name) {
  let products = getProducts();
  products = products.filter(p => p.name !== name);
  localStorage.setItem('products', JSON.stringify(products));
}