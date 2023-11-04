const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

// 위의 방법은 인덱싱 하듯이 key에 접근하는 방법 중 하나
// const data = {
//     "development": {}
// }
// data["development"]

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
// sequelize 객체를 만든다.

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize: Sequelize}

db.Visitor = require('./Login')(sequelize, Sequelize);
// db.Visitor = require('./User')(sequelize, Sequelize);

// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체를 닮음

module.exports = db;
