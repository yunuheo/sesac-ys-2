const { Visitor } = require('../model');

exports.home = (req, res) => {
  res.render('index');
};

// GET / visitors => 기존 방명록 조회 후 render("visitor")
exports.visitor = (req, res) => {
  // select * from visitor;
  Visitor.findAll().then((result) => {
    console.log('findAll result', result);
    console.log('0 index의 username', result[0].username);
    // 기대 : [{id: , username:}, {id: , username:}]
    res.render('visitor', { data: result });
  });

  // Visitor.findAll({
  //     where: { username: "lily"}
  // })
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    pw: req.body.username,
    comment: req.body.comment,
  };
  Visitor.create(req.body)
    .then((result) => {
      console.log('create result: ', result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('오류 발생');
    });

  const createVisitor = await Visitor.create(data);
  res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('destroy result: ', result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // select * from visitor where id = ?? limit 1;
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result: ', result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // update visitor set username='??', comment='???' where id = ?
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log('update result: ', result);
    res.send({ result: true });
  });
};

exports.getTest = (req, res) => {
  // select username from visitor where id = 2 limit 1
  Visitor.findOne({
    attribuets: ['username', 'id'],
    where: {
      id: req.params.id,
    },
    order: [['id', 'ASC']],
  }).then((result) => {
    console.log('findOne result: ', result);
    res.send(result);
  });
};
