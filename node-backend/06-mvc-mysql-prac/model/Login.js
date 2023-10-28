// @@@@@@@@@@@@@@@@@@@@@@@@ DB 연동 @@@@@@@@@@@@@@@@@@@@@@@@

const mysql = require('mysql');
// createConnection: mysql 연결 정보를 받아서 mysql과 연결
// db 연결한다 > host, user, password, database 이름
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'zhsks754!',
  database: 'sesac_test',
});

// let users = `spretics//123412345//코딩온
// codee//4321//코디
// lily//1234//릴리`;

exports.getUser = (userID, userPW) => {
  const userArray = users.split('\n').map((user) => {
    const [id, pw, name] = user.split('//');
    return { id, pw, name };
  });
  return userArray.find((user) => user.id === userID && user.pw === userPW);
};

// @@@@@@@@@@@@@@@@@@@@@@@@ 회원 조회 @@@@@@@@@@@@@@@@@@@@@@@@
exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM users`, (err, rows) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
    if (err) {
      throw err;
    }

    console.log('visitor', rows);
    cb(rows);
  });
};
// @@@@@@@@@@@@@@@@@@@@@@@@ 회원 등록 @@@@@@@@@@@@@@@@@@@@@@@@
exports.insertUser = (data, cb) => {
  // insert into visitor (username, comment) values ('????', '?????')
  const sql = `insert into users (id, pw, name) values ('${data.id}', '${data.pw}','${data.name}')`;

  conn.query(sql, (err, result) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
    if (err) {
      throw err;
    }

    console.log('user insert', result);
    cb(result.insertID);
  });
};

// @@@@@@@@@@@@@@@@@@@@@@@@ 회원 삭제 @@@@@@@@@@@@@@@@@@@@@@@@

exports.delVisitor = (id, cb) => {
  const sql = `delete from users where id =${id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }

    console.log('visitor delete', result);
    cb(flag);
  });
};
