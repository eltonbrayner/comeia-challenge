const Sequelize = require("sequelize")
const conn = require("../utils/db")

const Administrator = conn.define('administrators', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  username: {
    allowNull: false,
    type: Sequelize.STRING
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING
  },
})

Administrator.sync({foce: false}).then(() => console.log('Table Administrator sync with success'))

module.exports = Administrator;