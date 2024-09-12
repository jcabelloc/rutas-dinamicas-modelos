const path = require('path');

const express = require('express');

const tiendaController = require('../controllers/tienda');


const router = express.Router();

// GET requiere una coincidencia exacta en la ruta
router.get('/', tiendaController.getIndex);

router.get('/productos', tiendaController.getProductos);

router.get('/carrito', tiendaController.getCarrito);

router.get('/pedidos', tiendaController.getPedidos);

router.get('/checkout', tiendaController.getCheckout);

module.exports = router;