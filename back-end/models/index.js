const { Sequelize } = require("sequelize");
const { Local } = require("../config/index");
const { Client } = require('pg');

const sequelize = new Sequelize(Local.DATABASE, Local.USER, Local.PASSWORD, {
  host: Local.HOST,
  port: Local.PORT,
  protocol: null,
  dialect: 'postgres',
  define: {
    underscored: false,
    freezeTableName: true,
    syncOnAssociation: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    classMethods: { method1: function () { } },
    instanceMethods: { method2: function () { } },
    timestamps: false
  },
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// sequelize.sync();

db.province = require("./models.province.js")(sequelize, Sequelize);
db.district = require("./models.district.js")(sequelize, Sequelize);
db.geography = require("./models.geography.js")(sequelize, Sequelize);
db.section = require("./models.section.js")(sequelize, Sequelize);
db.getchoce = require("./models.getchoce.js")(sequelize, Sequelize);

module.exports = db;