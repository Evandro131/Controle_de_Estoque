const sequelize = require('sequelize');
require('dotenv').config();

const connection = new sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  define: {
    timestamps: false, // para não utilizar campos created_at e updated_at
    freezeTableName: true // para não adicionar o "s" no nome das tabelas
  }
});

connection.authenticate().then(() => {
    console.log('Conexão estabelecida com o banco de dados.');
  }).catch((error) => {
  console.error('Erro ao conectar com o banco de dados:', error);
  });

  module.exports = connection