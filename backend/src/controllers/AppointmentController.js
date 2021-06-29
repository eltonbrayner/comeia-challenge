const { Op } = require('sequelize');
const AppointmentModel = require('../models/Appointment');
const validateCPF = require('../utils/validateCPF');

module.exports = {
  async index(req, res) {
    const { limit = 10, page = 0, search = '' } = req.query;

    const { count: size, rows: appointments } =
      await AppointmentModel.findAndCountAll({
        where: {
          [Op.or]: {
            name: { [Op.iLike]: `%${search}%` },
            cpf: { [Op.like]: `%${search}%` },
            profession: { [Op.iLike]: `%${search}%` },
          },
        },
        limit,
        offset: parseInt(page) * parseInt(limit),
      });

    return res.json({
      size,
      limit,
      page,
      appointments,
    });
  },

  async store(req, res) {
    const { name, cpf, birth, profession, comorbidity, dataSchedule } =
      req.body;

    if (!validateCPF(cpf)) {
      return res.status(200).json({
        status: 401,
        message: 'CPF invalid',
      });
    }

    const cpfExist = await AppointmentModel.findOne({
      where: { cpf: cpf },
    });

    const checkEmptyValues = [
      name,
      cpf,
      birth,
      profession,
      dataSchedule,
    ].filter((el) => el.length === 0);

    if (checkEmptyValues.length > 0) {
      return res.status(200).json({
        status: 402,
        message: 'Any field required has empty',
      });
    }

    if (!cpfExist) {
      await AppointmentModel.create({
        name,
        cpf,
        birth,
        profession,
        comorbidity,
        dataSchedule,
      })
        .then((el) =>
          res.status(200).json({
            status: 200,
            message: 'Appointment create with success',
            appointment: {
              name: el.name,
              date: el.dataSchedule,
            },
          }),
        )
        .catch((e) =>
          res.status(200).json({
            status: 400,
            message: 'Ocurred any problem on create this appointment',
            error: e,
          }),
        );
    } else {
      res.status(200).json({
        status: 409,
        message: 'Already appointment make with this CPF.',
      });
    }
  },

  async show(req, res) {
    const appointment = await AppointmentModel.findOne({
      where: { cpf: req.params.cpf },
    });

    return !appointment
      ? res.status(200).json({ status: 400, message: 'Search without result' })
      : res.status(200).json({ status: 200, consult: appointment });
  },

  async destroy(req, res) {
    const query = { where: { cpf: req.params.cpf } };

    const appointment = await AppointmentModel.findOne(query);
    if (!appointment) {
      return res.status(200).json({
        status: 400,
        message: 'No have CPF registered with this value',
      });
    }

    await AppointmentModel.destroy(query)
      .then((el) =>
        res
          .status(200)
          .json({ status: 200, message: 'Appointment deleted with success' }),
      )
      .catch((e) =>
        res
          .status(200)
          .json({ status: 500, message: 'Any problem occurred', error: e }),
      );
  },
};
