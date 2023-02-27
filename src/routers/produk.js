const router = require('express').Router();
const { produk } = require('../controllers');

// GET localhost:8080/produk => Ambil data semua produk
router.get('/', produk.getDataProduk);

// GET localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk)

// POST localhost:8080/produk/add => Tambah data produk ke database
// router.post('/add', produk.addDataProduk)

// POST localhost:8080/produk/2 => Edit data produk
// router.put('/edit/:id', produk.editDataProduk)

// POST localhost:8080/produk/delete => Delete data produk
// router.delete('/delete/:id', produk.deleteDataProduk)

module.exports = router;
