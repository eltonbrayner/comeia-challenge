const Sequelize = require("sequelize")
require("dotenv/config")

const conn = new Sequelize(
  process.env.dbname,
  process.env.dbuser,
  process.env.dbpass,
  {
    host: process.env.dbhost,
    dialect: 'postgres',
    timezone: '-03:00'
  }
)

module.exports = conn;