const { Login } = require('../model');

exports.home = (req, res) => {
  res.render('index2');
};

// GET / visitors => 기존 방명록 조회 후 render("visitor")
exports.user = (req, res) => {
  // select * from visitor;
  Login.findAll().then((result) => {
    console.log('findAll result', result);
    console.log('0 index의 name', result[0].name);
    // 기대 : [{id: , username:}, {id: , username:}]
    res.render('index2', { data: result });
  });

  // Visitor.findAll({
  //     where: { username: "lily"}
  // })
};

// POST /visitor => 방명록 insert
exports.postUser = async (req, res) => {
  const data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  Login.create(req.body)
    .then((result) => {
      console.log('create result: ', result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('오류 발생');
    });

  const createUser = await Login.create(data);
  res.send(createUser);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteUser = (req, res) => {
  Login.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('destroy result: ', result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getUserById = (req, res) => {
  // select * from visitor where id = ?? limit 1;
  Login.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result: ', result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchUser = (req, res) => {
  const data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  // update visitor set username='??', comment='???' where id = ?
  Login.update(data, {
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
  Login.findOne({
    attribuets: ['id', 'pw'],
    where: {
      id: req.params.id,
    },
    order: [['id', 'ASC']],
  }).then((result) => {
    console.log('findOne result: ', result);
    res.send(result);
  });
};
