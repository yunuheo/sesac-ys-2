const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

db.Customer.hasMany(db.Orders, {
  // onDelete: "cascade",
  foreignKey: "custid",
  // sourceKey: "custid"
});
db.Orders.belongsTo(db.Customer, {
  // onDelete: "cascade",
  foreignKey: "custid",
  // targetKey: "custid"
});

module.exports = db;
