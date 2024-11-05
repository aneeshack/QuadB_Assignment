const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Ticker = sequelize.define('Ticker', {
  name: { type: DataTypes.STRING, allowNull: false },
  last: { type: DataTypes.FLOAT, allowNull: false },
  buy: { type: DataTypes.FLOAT, allowNull: false },
  sell: { type: DataTypes.FLOAT, allowNull: false },
  volume: { type: DataTypes.FLOAT, allowNull: false },
  base_unit: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Ticker;
