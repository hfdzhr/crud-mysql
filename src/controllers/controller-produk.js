const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// Menampilkan semua data
const getDataProduk = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM produk', function (error, rows) {
      if (rows) {
        resolve(rows);
      } else {
        reject([]);
      }
    });
  });

  if (data) {
    res.send({
      success: true,
      message: 'Berhasil mengambil data',
      data: data,
    });
  } else {
    res.send({
      success: false,
      message: 'Gagal mengambil data',
    });
  }
};

// Menambahkan data produk
const addDataProduk = async (req, res) => {
  let data = {
    nama: req.body.nama,
    harga: req.body.harga,
    stok: req.body.stok,
  };

  const result = await new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO produk SET ?;',
      [data],
      function (error, rows) {
        if (rows) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    );
  });

  if (result) {
    res.send({
      success: true,
      message: 'Berhasil menambahkan data',
    });
  } else {
    res.send({
      success: false,
      message: 'Gagal menambahkan data',
    });
  }
};

// Mengubah data
const editDataProduk = async (req, res) => {
  let id = req.params.id;
  let dataEdit = {
    nama: req.body.nama,
    harga: req.body.harga,
    stok: req.body.stok,
  };

  const result = await new Promise((resolve, reject) => {
    connection.query(
      'UPDATE produk SET ? WHERE id = ?;',
      [dataEdit, id],
      function (error, rows) {
        if (rows) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    );
  });

  if (result) {
    res.send({
      success: true,
      message: 'Berhasil mengubah data',
    });
  } else {
    res.send({
      success: false,
      message: 'Gagal mengubah data',
    });
  }
};

module.exports = {
  getDataProduk,
  addDataProduk,
  editDataProduk,
};
