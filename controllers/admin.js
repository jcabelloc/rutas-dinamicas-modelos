const Producto = require('../models/producto');

exports.getCrearProducto = (req, res, next) => {
  res.render('admin/editar-producto', { 
    titulo: 'Crear Producto',
    path: '/admin/crear-producto',
    modoEdicion: false
  });
};

exports.postCrearProducto = (req, res, next) => {
  const nombre = req.body.nombre;
  const urlImagen = req.body.urlImagen;
  const precio = req.body.precio;
  const descripcion = req.body.descripcion;
  const producto = new Producto(nombre, urlImagen, descripcion, precio);
  producto.save();
  res.redirect('/')
};

exports.getEditarProducto = (req, res, next) => {
  const modoEdicion = req.query.editar;
  console.log(req.query)
  if (!modoEdicion) {
    return res.redirect('/');
  }
  const idProducto = req.params.idProducto;
  Producto.findById(idProducto, producto => {
    if (!producto) {
      return res.redirect('/');
    }
    res.render('admin/editar-producto', {
      titulo: 'Editar Producto',
      path: '/admin/edit-producto',
      modoEdicion: true,
      producto: producto
    });
  });
};

exports.getProductos = (req, res, next) => {
    Producto.fetchAll(productos => {
      res.render('admin/productos', {
        prods: productos,
        titulo: 'Admin Productos',
        path: '/admin/productos'
      });
    });
  };