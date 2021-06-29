const Sequelize = require('sequelize');
const conn = require('../utils/db');

const Appointment = conn.define('appointments', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  cpf: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  birth: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  profession: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  comorbidity: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  dataSchedule: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

Appointment.sync({ foce: false }).then(() =>
  console.log('Table Appointment sync with success'),
);

module.exports = Appointment;
