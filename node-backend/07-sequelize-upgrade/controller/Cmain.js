const { Customer, Orders } = require('../model');
const Op = Sequelize.Op;

exports.main = async (req, res) => {
  // user의 주문 목록 "custname"과 함께
  const cust = await Customer.findAll({
    where: {},
    attributes: ['custid', 'custname', 'birth'],
    where: { birth: { [Op.gte]: '2000-01-01' } },
    include: [
      {
        model: Orders,
        attribues: { exclude: ['custid'] },
        // where {}
      },
    ],
  });

  res.send(cust);
};
