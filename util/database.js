const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Baumkastanien3", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize