exports.main = (req, res) => {
  res.render('index2');
};

exports.login = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};
