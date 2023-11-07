const crypto = require('crypto');

function createHashedPw(pw) {
  return crypto.createHash('sha512').update(pw).digest('base64');
}

console.log('pw 1234: ', createHashedPw('1234'));
console.log('pw 1234: ', createHashedPw('5678'));

const input = '1234';

const dbPw = 'Cm+euqVeIc4nC23y59gSyYfVEasEctJLUBYitYePnksDARNW88n4WwhM92Oplak/FC1RB/qaktjmDnjTyWphSg==';
console.log('compare result: ', createHashedPw(input) == dbPw);

const dbPwSalt = console.log('compare result: ', createHashedPwWithSalt(input) == dbPwSalt);

function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString('base64');
  console.log('salt:', salt);
  const iterations = 100;
  const keylen = 64;
  const digest = 'sha512';
  return crypto.pbkdf2Sync(pw, salt, iterations, keylen, digest).toString('base64');
  // 암호화할 문자열, salt, 반복횟수, 키의 길이, 알고리즘
}

function comparePw(pw, salt) {
  const iterations = 100;
  const keylen = 64;
  const digest = 'sha512';
  return crypto.pbkdf2Sync(pw, salt, iterations, keylen, digest).toString('base64');
}

const dbSalt = '';
console.log('pw 1234 wtih salt: ', createHashedPwWithSalt('1234'));
