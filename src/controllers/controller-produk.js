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
      message: 'Berhasil ambil data',
      data: data,
    });
  } else {
    res.send({
      success: false,
      message: 'Gagal ambil data',
    });
  }
};

module.exports = {
  getDataProduk,
};
