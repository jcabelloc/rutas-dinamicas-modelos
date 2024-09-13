const fs = require('fs');
const path = require('path');

const raizDir = require('../utils/path');


const p = path.join(
    raizDir,
    'data',
    'carrito.json'
);

module.exports = class Carrito {
  static agregarProducto(id, precio) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let carrito = { productos: [], precioTotal: 0 };
      if (!err) {
        carrito = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const indiceProductoExistente = carrito.productos.findIndex(
        prod => prod.id === id
      );
      const productoExistente = carrito.productos[indiceProductoExistente];
      let productoActualizado;
      // Add new product/ increase quantity
      if (productoExistente) {
        productoActualizado = { ...productoExistente };
        productoActualizado.cantidad = productoActualizado.cantidad + 1;
        carrito.productos = [...carrito.productos];
        carrito.productos[indiceProductoExistente] = productoActualizado;
      } else {
        productoActualizado = { id: id, cantidad: 1 };
        carrito.productos = [...carrito.productos, productoActualizado];
      }
      carrito.precioTotal = carrito.precioTotal + +precio;
      fs.writeFile(p, JSON.stringify(carrito), err => {
        console.log(err);
      });
    });
  }
};
