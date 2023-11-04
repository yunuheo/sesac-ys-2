<<<<<<< HEAD
const { Customer, Orders } = require('../model');
const Op = Sequelize.Op;

exports.main = async (req, res) => {
  // user의 주문 목록 "custname"과 함께
  const cust = await Customer.findAll({
    where: {},
=======
const { Customer, Orders, Sequelize } = require('../model');
const Op = Sequelize.Op;

exports.main = async (req, res) => {
  // customer의 주문 목록 "custname" 과 함꼐
  const cust = await Customer.findAll({
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643
    attributes: ['custid', 'custname', 'birth'],
    where: { birth: { [Op.gte]: '2000-01-01' } },
    include: [
      {
        model: Orders,
<<<<<<< HEAD
        attribues: { exclude: ['custid'] },
        // where {}
      },
    ],
  });

  res.send(cust);
=======
        attributes: { exclude: ['custid'] },
        // where: {}
      },
    ],
    raw: true,
  });

  res.send(cust);
  res.render('index', cust);
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643
};
