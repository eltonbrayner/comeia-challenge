const { Router } = require('express');
const routes = Router();
const { verifyJWT } = require('./utils/JWTAuth');

const AppointmentController = require('./controllers/AppointmentController');
const AdministratorController = require('./controllers/AdministratorController');

//Appointments Routes
routes.get('/appointments/find/:cpf', AppointmentController.show);
routes.post('/appointmnents/create', AppointmentController.store);
routes.get('/appointments', verifyJWT, AppointmentController.index);
routes.delete(
  '/appointments/delete/:cpf',
  verifyJWT,
  AppointmentController.destroy,
);

//Administrator Routes
routes.post('/administrator/login', AdministratorController.show);
routes.get('/administrator/token', verifyJWT, AdministratorController.token);

module.exports = routes;
