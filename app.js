const ProductManager = require('./ProductManager');

// Ruta al archivo JSON para la persistencia de datos
const filePath = './products.json';

// Creamos una instancia de ProductManager
const productManager = new ProductManager(filePath);

// Agregamos algunos productos
productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del Producto 1',
  price: 19.99,
  thumbnail: 'ruta/imagen1.jpg',
  code: 'ABC123',
  stock: 50,
});

productManager.addProduct({
  title: 'Producto 2',
  description: 'Descripción del Producto 2',
  price: 29.99,
  thumbnail: 'ruta/imagen2.jpg',
  code: 'XYZ789',
  stock: 30,
});

// Obtenemos todos los productos y los mostramos
const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

// Obtenemos un producto por su ID y lo mostramos
const productId = 1;
const productById = productManager.getProductById(productId);
console.log(`Producto con ID ${productId}:`, productById);

// Actualizamos un producto y lo mostramos
const productToUpdate = {
  price: 25.99,
  stock: 40,
};
productManager.updateProduct(productId, productToUpdate);

const updatedProduct = productManager.getProductById(productId);
console.log('Producto actualizado:', updatedProduct);

// Eliminamos un producto y lo mostramos
const productIdToDelete = 2;
productManager.deleteProduct(productIdToDelete);

console.log('Productos después de eliminar uno:');
console.log(productManager.getProducts());
