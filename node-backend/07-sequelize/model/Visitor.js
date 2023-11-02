// 테이블 구조를 정의
// orm은 객체와 db의 table을 매핑하는 기술
// squelize를 이용해서 table의 구조를 정의할 필요가 있음.

function Visitor(Sequelize, DataTypes) {
  return Sequelize.define(
    // 모델(테이블), sequalize 객체의 define 메소드를 이용해서)
    'visitor', //테이블 이름
    {
      id: {
        // int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        type: DataTypes.INTEGER,
        allowNull: false, // true가 기본 값
        primaryKey: true, // false가 기본 값
        autoIncrement: true,
      },
      username: {
        // mediumtext
        type: DataTypes.STRING(10),
        // allowNull: true, // true가 기본 값
      },
      comment: {
        // mediumtext
        type: DataTypes.TEXT('medium'),
        // allowNull: true, // true가 기본 값
      },
    }, // 컬럼 정의
    {
      tableName: 'visitor',
      freezeTableName: true,
      // sequelizse에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴 때 복수로 변경을 시키는 경우가 있습니다. visitors
      // insert into visitor ~~ => create() => insert into visitors ~~~
      timestamps: false,
      // insert, update 시에 그 시간을 자동으로 저장하겠다. (기본값 true)
      // 저장하지마! => false로 지정
      // createAt, updateAt 컬럼에 자동으로 저장됨
    }
  );
}

module.exports = Visitor;
