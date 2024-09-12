const Producto = require('../models/producto');

exports.getProductos = (req, res, next) => {
  Producto.fetchAll(productos => {
    res.render('tienda/lista-productos', {prods: productos, titulo: 'Todos los Productos', path: '/productos'});
  });
};

exports.getProducto = (req, res, next) => {
  const idProducto = req.params.idProducto;
  console.log(idProducto);
  res.redirect('/');
};


exports.getIndex = (req, res, next) => {
  Producto.fetchAll(productos => {
    res.render('tienda/index', {
      prods: productos,
      titulo: 'Tienda',
      path: '/'
    });
  });
};

exports.getCarrito = (req, res, next) => {
  res.render('tienda/carrito', {
    path: '/carrito',
    titulo: 'Mi Carrito'
  });
};

exports.getPedidos = (req, res, next) => {
  res.render('tienda/pedidos', {
    path: '/pedidos',
    titulo: 'Mis Pedidos'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('tienda/checkout', {
    path: '/checkout',
    titulo: 'Checkout'
  });
};

