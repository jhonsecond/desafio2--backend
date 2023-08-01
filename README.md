segundo desafio de backend para el curso de Coderhouse

# Funcionalidades:
1-Se ha agregado la variable this.path en el constructor para recibir la ruta del archivo de persistencia al momento de generar una instancia de la clase.

2-Se están guardando los objetos de productos en un archivo JSON con el formato especificado (id autoincrementable, título, descripción, precio, ruta de imagen, código identificador y stock).

3-El método addProduct agrega productos al arreglo y los guarda en el archivo JSON con el id autoincrementable.

4-El método getProducts lee el archivo de productos y devuelve todos los productos en formato de arreglo.

5-El método getProductById busca un producto por su ID en el archivo y lo devuelve en formato objeto.

6-El método updateProduct actualiza un producto en el archivo basándose en el ID proporcionado y el campo a actualizar.

7-El método deleteProduct elimina un producto del archivo basándose en el ID proporcionado.