
// get producrt of localStorage
function getProducts() {
  // verifylocalStorage
  

  let products = localStorage.getItem('products');
  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
}

// save product in localStorage
function saveProduct(product) {
  let products = getProducts();
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}

$(function(){

  console.log('Jquery is working!');
  

});