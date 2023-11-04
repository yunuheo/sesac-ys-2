function Orders(Sequelize, DataTypes) {
  return Sequelize.define(
<<<<<<< HEAD
    'orders',
=======
    "orders",
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643
    {
      orderid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      prodname: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
<<<<<<< HEAD
      tableName: 'orders',
=======
      tableName: "orders",
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = Orders;
