// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ강사님 해설ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function call(name) {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        console.log(name);
        resovle(name);
      }, 1000);
    });
  }
  
  function back() {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        console.log("back");
        resovle("back");
      }, 1000);
    });
  }
  
  function hell() {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        resovle("callback hell");
      }, 1000);
    });
  }
  
  async function exec() {
    // call의 resolve 인자ㅏ로 넘겨준 값이 res1에 담기게 된다. // res1 = "kim"
    const res1 = await call("kim");
    console.log(res1, "반가워");
    // res2 = "back"
    const res2 = await back();
    console.log(res2, "을 실행했구나");
    // res3 = "callback hell"
    const res3 = await hell();
    console.log("여기는", res3);
  }
  
  exec();