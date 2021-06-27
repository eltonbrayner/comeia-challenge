const express = require("express");
const app = express();
const cors = require("cors")
const conn = require("./src/utils/db")
require("dotenv/config")

// Models
require("./src/models/Appointment")
require("./src/models/Administrator")

const routes = require("./src/routes")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


conn
  .authenticate()
  .then(() => console.log('DB Connected'))
  .catch(e => console.log(e))

app.use(routes)

app.listen(process.env.PORT, () => console.log('Server running'))