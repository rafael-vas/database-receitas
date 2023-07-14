const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../app');

const Receita = sequelize.define('Receita', {
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING,
});

module.exports = Receita;
