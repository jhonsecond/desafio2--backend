const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  _readProductsFile() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  _writeProductsFile(products) {
    try {
      const data = JSON.stringify(products);
      fs.writeFileSync(this.path, data, 'utf8');
    } catch (error) {
      console.error('Error al guardar en el archivo:', error);
    }
  }

  addProduct(product) {
    const products = this._readProductsFile();
    const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;
    product.id = lastProductId + 1;
    products.push(product);
    this._writeProductsFile(products);
    console.log('Producto agregado con éxito.');
  }

  getProducts() {
    return this._readProductsFile();
  }

  getProductById(id) {
    const products = this._readProductsFile();
    return products.find((product) => product.id === id);
  }

  updateProduct(id, updatedFields) {
    const products = this._readProductsFile();
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedFields };
      this._writeProductsFile(products);
      console.log('Producto actualizado con éxito.');
    } else {
      console.log('Producto no encontrado.');
    }
  }

  deleteProduct(id) {
    const products = this._readProductsFile();
    const updatedProducts = products.filter((product) => product.id !== id);
    if (products.length !== updatedProducts.length) {
      this._writeProductsFile(updatedProducts);
      console.log('Producto eliminado con éxito.');
    } else {
      console.log('Producto no encontrado.');
    }
  }
}

module.exports = ProductManager;
