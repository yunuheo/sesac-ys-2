let users = `spretics//123412345//코딩온
codee//4321//코디
lily//1234//릴리`;

exports.getUser = (userID, userPW) => {
  const userArray = users.split('\n').map((user) => {
    const [id, pw, name] = user.split('//');
    return { id, pw, name };
  });
  return userArray.find((user) => user.id === userID && user.pw === userPW);
};
