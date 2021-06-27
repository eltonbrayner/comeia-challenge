const AdministratorModel = require("../models/Administrator")
const { jwt } = require('../utils/JWTAuth');

module.exports = {
  async show(req, res) {
    const { username, password } = req.body
    if (username) {
      const admin = await AdministratorModel.findOne({
        where: {
          username: username,
        },
      });

      if (admin.password === password)
      {
        const id = admin.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300, //expira em 5 minutos
        });
        return res.status(200).json({
          status: 200,
          message: 'Login make with success',
          token: token,
        });
      }
    }

    res.status(200).json({ status: 500, message: 'Invalid login' });
  },
}